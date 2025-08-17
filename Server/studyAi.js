import multer from 'multer';
import pdfParse from 'pdf-parse';
import rateLimit from "express-rate-limit"
import express from 'express'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from "@google/generative-ai";

const aiRouter=express.Router()
dotenv.config()
const SUMMARY_PROMPT =process.env.SUMMARY_PROMPT
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const QUESTION_PROMPT=process.env.QUESTION_PROMPT
const QUIZZ_PROMPT=process.env.QUIZZ_PROMPT
const ANSWER_POROMPT=process.env.ANSWER_POROMPT
// to summarize

const upload = multer({ storage: multer.memoryStorage() });
const summarizeLimiter = rateLimit({
  windowMs: 15 * 1000, 
  max: 1, 
  message: { error: "Please wait before sending another summarize request." }
});

aiRouter.post("/summarize", summarizeLimiter,upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileBuffer = req.file.buffer;
    const data = await pdfParse(fileBuffer);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `${SUMMARY_PROMPT}:\n\n${data.text}`;
    const result = await model.generateContent(prompt);
    const summary = result.response.text();
    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ai assistant for Questions

aiRouter.post('/questions', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const { question } = req.body;
    const fileBuffer = req.file.buffer;
    const data = await pdfParse(fileBuffer);
    // Truncate and clean text
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `${QUESTION_PROMPT}\n\n${data.text}\nQuestion: ${question}`;
    console.log("Prompt length:", prompt.length);
    const result = await model.generateContent(prompt);
    const answer = result.response?.text() || "No answer generated";
    res.status(200).json({answer });

  } catch (error) {
    console.error("Error in /questions route:", error);
    res.status(500).json({ error: error.message });
  }
});
// ai assistant for Quizzes
aiRouter.post('/quizzes', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileBuffer = req.file.buffer;
    const data = await pdfParse(fileBuffer);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // Generate quiz
    const prompt = `${QUIZZ_PROMPT}:\n\n${data.text}`;
    const result = await model.generateContent(prompt);
    const quizze = result.response.text();
    // Generate answers
    const answer_prompt = `${ANSWER_POROMPT}:\n\n${quizze}`;
    const answer_result = await model.generateContent(answer_prompt);
    const answers = answer_result.response.text();
    res.json({
      quiz: quizze,
      answers: answers,
    });
  } catch (error) {
    console.error("Error in /quizzes route:", error);
    res.status(500).json({ error: error.message });
  }
});






export default aiRouter