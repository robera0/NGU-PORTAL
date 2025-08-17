import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import FileLoader from "../../Inputs/FileLoader";
import SideBar from "../student/SideBar";
import NavBar from "../student/NavBar";
import { Link } from "react-router-dom";

const Summerize = () => {
  const [transcriptLoader, setTranscriptLoader] = useState(false);
  const [transcriptPreview, setTranscriptPreview] = useState(null);
  const [summary, setSummary] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setSelectedFile(null);
      setTranscriptPreview(null);
      return;
    }

    setError("");
    setSelectedFile(file);
    setTranscriptPreview(file.name);
    setSummary("");
  };

  const handleSummarize = async () => {
    if (!selectedFile) return;
    setTranscriptLoader(true);
    setError("");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:8000/api/summarize", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error while summarizing");

      const data = await res.json();
      console.log(data)
      setSummary(data.summary || "No summary generated.");
    } catch (err) {
      console.error(err);
      setError("Failed to summarize the file. Please try again.");
    } finally {
      setTranscriptLoader(false);
    }
  };

  return (
    <div className="flex max-w-8xl mx-auto p-4">
      {/* Sidebar */}
      <div className="lg:w-[17%] ml-5 mt-2 h-screen hidden lg:block">
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Navbar */}
        <div className="mt-5">
          <NavBar />
        </div>

        {/* Page Intro */}
        <div className="text-center max-w-2xl mx-auto mt-6">
          <p className="text-gray-700 text-lg">
            Welcome to the AI Document Summarizer! Upload your PDF files here to get a concise summary of the content.{" "}
            ⚠️ <span className="font-semibold text-red-500">Use this tool for learning purposes only and do not rely solely on AI.</span>
          </p>
        </div>

        {/* Upload Section */}
        <div className="flex justify-center mt-10">
          <div className="relative max-w-4xl w-full border-2 border-dashed border-purple-400 rounded-2xl h-80 flex flex-col justify-center items-center bg-purple-50 hover:bg-purple-100 transition-all duration-300">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileSelect}
              className="absolute w-full h-full opacity-0 cursor-pointer rounded-2xl"
            />

            {!transcriptLoader && !transcriptPreview && (
              <>
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-purple-500 text-7xl mb-4 animate-bounce"
                />
                <p className="font-semibold text-purple-700 text-lg">
                  Drag & Drop your PDF here
                </p>
                <p className="text-gray-500 text-sm">
                  or click to select a file from your computer
                </p>
              </>
            )}

            {transcriptLoader && <FileLoader />}

            {!transcriptLoader && transcriptPreview && (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="text-red-500 text-7xl mb-2"
                />
                <p className="font-medium text-gray-700">{transcriptPreview}</p>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center font-medium">{error}</div>
        )}

        {/* Summarize Button */}
        {transcriptPreview && !transcriptLoader && (
          <div className="flex justify-center">
            <button
              onClick={handleSummarize}
              disabled={transcriptLoader}
              className={`mt-4 px-6 py-2 font-semibold rounded-lg transition-colors ${
                transcriptLoader
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {transcriptLoader ? "Summarizing..." : "Summarize"}
            </button>
          </div>
        )}

        {/* Summary Section */}
        {summary && (
          <div className="bg-white border-2 border-purple-400 rounded-xl p-6 shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Summary</h2>
            <p className="text-gray-800 whitespace-pre-line">{summary}</p>
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-end mr-30">
          <Link
            to="/helpai"
            className="text-md text-white bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summerize;
