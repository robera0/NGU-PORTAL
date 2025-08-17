import SideBar from "../student/SideBar"
import NavBar from "../student/NavBar"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import FileLoader from "../../Inputs/FileLoader";
import { Link } from "react-router-dom"
const QA = () => {
   const [fileLoader, setfileLoader] = useState(false);
    const [filePreview, setfilepreview] = useState(null);
    const [answer, setAnswer] = useState("");
    const [quizzes,setquizzes]=useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState("");
    const [getinput,setGetinput]=useState(false)
    const [input,setInput]=useState("")
    const [isQuiz,setIsQuiz]=useState(false)
    const handleInput=(e)=>setInput(e.target.value)
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setSelectedFile(null);
      setfilepreview(null);
      return;
    }

    setError("");
    setSelectedFile(file);
    setfilepreview(file.name);
    setquizzes("");
  };
  
  const handlequizz= async()=>{
    if (!selectedFile) return;
        setfileLoader(true);
        setError("");
      setIsQuiz(true)
      const formData= new FormData();
      formData.append('file',selectedFile);
       try {
      const res = await fetch("http://localhost:8000/api/quizzes", {
      method: "POST",
      body: formData
     });
      if (!res.ok) throw new Error("Server error while getting Questiond");
      const data = await res.json();
      console.log(data)
      setquizzes(data || 'No Quizz is Generated ');
    } catch (err) {
      console.error(err);
      setError("Failed to get the Quizz from the file. Please try again.");
    } finally {
      setfileLoader(false);
    }
      }
const chunkQuizz=(arr,size)=>{
  const quiz =[]
    for (let i = 0; i < arr.length; i += size) {
      quiz.push(arr.slice(i , i+=size))
    }
    return quiz
}
  const chunk = chunkQuizz((quizzes,1))
  console.log(chunk)

  const handlegotoQuestion=()=>setGetinput(true)

  const handleQuestion = async () => {
    if (!selectedFile) return;
    setfileLoader(true);
    setError("");

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("question", input);  

    try {
      const res = await fetch("http://localhost:8000/api/questions", {
      method: "POST",
      body: formData
     });
      if (!res.ok) throw new Error("Server error while getting Questiond");
      const data = await res.json();
      console.log(data)
      setAnswer(data.answer || 'No Answer is Generated ');
    } catch (err) {
      console.error(err);
      setError("Failed to get the Answer from the file. Please try again.");
    } finally {
      setfileLoader(false);
    }
  };
  return (
     <div className="flex h-screen">
      {/* Sidebar */}
    <div className='lg:w-[17%] ml-5 mt-2 h-screen'>
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>
      <div className=' h-full w-[85%]'>
         <div className='mt-8'>
            <NavBar/>
            <div className="mt-10">
              <p className="text-gray-500 text-md">
           Welcome to the AI Q&A Assistant! Ask any question from your study materials and get instant, clear answers. Practice, learn, and test your knowledge in a smarter way.
          </p>
            </div>
                  <div className="flex justify-center mt-10">
          <div className="relative max-w-4xl w-full md:w-sm border-2 border-dashed border-purple-400 rounded-2xl h-40 flex flex-col justify-center items-center bg-purple-50 hover:bg-purple-100 transition-all duration-300">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileSelect}
              className="absolute w-full h-full opacity-0 cursor-pointer rounded-2xl"
            />

            {!fileLoader && !filePreview && (
              <>
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-purple-500  md:text-4xl text-7xl mb-4 animate-bounce"
                />
                <p className="font-semibold text-purple-700 text-lg">
                  Drag & Drop your PDF here
                </p>
                <p className="text-gray-500 text-sm">
                  or click to select a file from your computer
                </p>
              </>
            )}

            {fileLoader && <FileLoader />}

            {!fileLoader && filePreview && (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="text-red-500 text-7xl mb-2"
                />
                <p className="font-medium text-gray-700">{filePreview}</p>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center font-medium">{error}</div>
        )}
         {/* Ask Question Button */}
        {filePreview && !fileLoader && (
          <div className="flex justify-center space-x-4">
             {getinput ? <div className="mt-3">
             <input 
                className='md:w-[20rem] md:h-[3rem] pl-5 border border-white rounded-2xl shadow-md focus:border-purple-500  outline-none'
                placeholder='Ask a Question '
                onChange={handleInput}
                type="text" />
             <button
              onClick={handleQuestion}
              disabled={fileLoader}
              className={`mt-4 ml-4 px-6 py-2 font-semibold rounded-lg transition-colors ${
                fileLoader
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {fileLoader ? "Load..." : "Ask Question"}
            </button>
              </div>   
            : 
            
                <>
              <button
              onClick={handlegotoQuestion}
              disabled={fileLoader}
              className={`mt-4 px-6 py-2 font-semibold rounded-lg transition-colors ${
                fileLoader
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {fileLoader ? "Load..." : "Ask Question"}
            </button>
             {/* Ask Quizz */}
              <button
              onClick={handlequizz}
              disabled={fileLoader}
              className={`mt-4 px-6 py-2 font-semibold rounded-lg transition-colors ${
                fileLoader
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
            {fileLoader ? "Load..." : "Get Quizzed"}
            </button>              
                </>      
            }   

          </div>
        )}
          {answer  && (
          <div className="bg-white border-2 mt-15 w-[80%] border-purple-400 rounded-xl p-6 shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Answer</h2>
            <p className="text-gray-800 whitespace-pre-line">{answer}</p>

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

         {isQuiz&&
           <>
            {/*Next Quizz*/}
             <div className="flex mt-10 flex-wrap space-x-3">
              {chunk.map((q)=>(
                <>
                 <div className="bg-white border-2 mt-15 w-[30%] border-purple-400 rounded-xl p-6 shadow-md space-y-4"> 
                   <p>{q.quiz}</p>
                  </div>
               <div className="bg-white border-2 mt-15  w-[30%] border-purple-400 rounded-xl p-6 shadow-md space-y-4">
                <p>{q.answers}</p>
                 </div>
                </>    
                ))}
                </div>
                {chunk != "" && 
                    <>
                      <div className="flex justify-end mr-30">
                        <button
                          to="/helpai"
                          className="text-md text-white bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                        >
                        Next
                        </button>
                      </div>
                    </>
                }
        
              </>
        }

            </div>
     </div>
</div>
  )
}

export default QA