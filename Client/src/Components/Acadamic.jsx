  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowLeft, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
  import { useUser } from './userContext';
  import { useState } from 'react';
  import FileLoader from '../Inputs/FileLoader';

  const Acadamic = () => {
    const [notify, setNotify] = useState(false);
    const [matricNotify, setMatricNotify] = useState(false);
    const [showTranscript, setShowTranscript] = useState(false);
    const [showMatric, setShowMatric] = useState(false);
    const [transcriptPreview, setTranscriptPreview] = useState('');
    const [matricPreview, setMatricPreview] = useState('');
    const [transcriptLoader, setTranscriptLoader] = useState(false);
    const [matricLoader, setMatricLoader] = useState(false);
    const [randomTranscript, setRandomTranscript] = useState(true);
    const [randomMatric, setRandomMatric] = useState(true);
    const [validatAcForm,setValidateAcForm]=useState("")

    const {
      Acslide, setAcSlide,
      hgname, setHgnamel,
      transcript, setTranscript,
      listTranscript, setListTranscript,
      matric, setMatric,extra,setExtra, scrollRef,isAcadamicFormValid ,setAcadamicFormValid
    } = useUser();

    const handleSlide = () => {
  setAcSlide(prev => !prev) 
    }

    const Filled =// check the inputs values not to be empty
                  hgname?.trim() &&
                  transcript &&       
                  matric &&           
                  extra?.trim();       

    
    const handleHgName = (e) => setHgnamel(e.target.value);

    const handleExtra=(e)=>{ setExtra(e.target.value) , console.log(e)} 

    const handleTranscriptUpload = (e) => {
      const file = e.target.files[0];

      if (file && file.size > 1024 * 1024) {
        setNotify(true);
        setTranscript(null);
        setTranscriptPreview('');
        setShowTranscript(false);
        return;
      }

      setNotify(false);
      setTranscriptLoader(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          setTranscriptPreview(reader.result);
          setTranscript(file);
          setShowTranscript(true);
          setRandomTranscript(false);
          setListTranscript(prevList => [file, ...prevList]); // all the student transcript 
          setTranscriptLoader(false);
        }, 3000); 
      };
      reader.readAsDataURL(file);
    };

    const handleMatricUpload = (e) => {
      const file = e.target.files[0];

      if (file && file.size > 1024 * 1024) {
        setMatricNotify(true);
        setMatric(null);
        setMatricPreview('');
        setShowMatric(false);
        return;
      }

      setMatricNotify(false);
      setMatricLoader(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          setMatricPreview(reader.result);
          setMatric(file);
          setShowMatric(true);
          setRandomMatric(false);
          setMatricLoader(false);
        }, 3000); 
      };
      reader.readAsDataURL(file);
    };

  // send the basicn info to the server 
  const API_URL = import.meta.env.VITE_API_URL;


const newStudent=async()=>{

  const res =await fetch(`${API_URL }/api/students`,{
    method:'POST',
    headers:{
    'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        id:0,
        First_name :firstName,
        Middle_name:middleName,
        Last_name:lastName,
        Degree_Program:degreeProgram ,
        id_Number:studentNumber,
        Email:email,
        Phone_Number:phoneNumber,
        Country:countries,
        High_School_Name:hgname,
    })
  })
  if (!res.ok) {
    throw new Error('Failed to post data');
  }
  const data=await res.json ()
  console.log (data)
}

  const handleSubmitbtn= ()=>{
      if(!Filled){

      setValidateAcForm("required input must be filled ") ;
      setAcadamicFormValid(false)
    }
      else{
    setValidateAcForm("successful") ;  
    setAcadamicFormValid(true) // make the Acadamic inof valid and go to the Acadamic Form
       newStudent()
    // some loader gone be here
  }
    }
    return (
      <div className='border-b  border-b-gray-300'>
        <div
          onClick={handleSlide}
          className={`${Acslide ? "text-white" : "-translate-6"} flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-200 rounded-xl shadow-sm hover:bg-[#8200DB] hover:text-white transition`}
          style={Acslide ? { backgroundColor: "#8200DB" } : {}}
        >
          <h2 className='text-xl font-semibold'>Acadamic Background</h2>
          <div className={`${Acslide ? 'rotate-[-90deg] text-[#8200DB] font-bold bg-white' : 'rotate-0 bg-[#AF89EA]'} h-10 w-10 flex justify-center items-center rounded-full transition-transform duration-300`}>
            <FontAwesomeIcon className={`${!Acslide  && "text-white"}`} icon={faArrowLeft} />
          </div>
        </div>

        <div className={`transition-all duration-500when u click the btn it get you to  the form below in react overflow-hidden ${Acslide ? 'max-h-[4000px] mt-6 px-6 overflow-y-auto' : 'max-h-0 px-6'}`}
          ref={scrollRef}>
          {Acslide && (
            <>
              {/* High School Name */}
              <p className='font-semibold mb-3'>High School Name</p>
              <div className='space-y-1'>
                <input
                  className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  value={hgname}
                  onChange={handleHgName}
                  required
                />
              </div>

              <div className='flex flex-wrap gap-10 mt-6'>
                {/* Upload Transcript */}
                <div>
                  <p className='font-semibold mb-3'>Upload your high school transcript</p>
                  <div className="relative w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer overflow-hidden">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleTranscriptUpload}
                      required
                      className="absolute w-64 h-64 top-10 z-10 opacity-0 focus:outline-none hover:ring-2 hover:ring-purple-500 cursor-pointer"
                    />
                    <div className="w-full h-full relative">
                      {randomTranscript && !transcriptLoader && (
                        <>
                          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <FontAwesomeIcon icon={faCloudArrowUp} className="text-[#AF89EA] text-6xl" />
                          </div>
                          <p className='absolute bottom-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold'>Upload a File</p>
                          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm whitespace-nowrap text-gray-600">Drag and Drop your file here</p>
                        </>
                      )}

                      {transcriptLoader && (
                        <div className="flex justify-center items-center h-full">
                          <FileLoader />
                        </div>
                      )}

                      {!transcriptLoader && showTranscript && transcriptPreview && (
                        <img
                          src={transcriptPreview}
                          alt="Uploaded Transcript Preview"
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                    </div>
                  </div>

                  <p className="text-bold ml-5 text-red-600">{notify ? "File size is greater than 1MB" : ""}</p>
                  <p className='text-sm text-gray-500 mt-1'>Your file must be less than 1MB</p>
                </div>

                {/* Upload Matric Results */}
                <div>
                  <p className='font-semibold mb-3'>Upload your Matric Results</p>
                  <div className="relative w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer overflow-hidden">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMatricUpload}
                      required
                      className="absolute w-64 h-64 top-10 z-10 opacity-0 focus:outline-none hover:ring-2 hover:ring-purple-500 cursor-pointer"
                    />
                    <div className="w-full h-full relative">
                      {randomMatric && !matricLoader && (
                        <>
                          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <FontAwesomeIcon icon={faCloudArrowUp} className="text-[#AF89EA] text-6xl" />
                          </div>
                          <p className='absolute bottom-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold'>Upload a File</p>
                          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm whitespace-nowrap text-gray-600">Drag and Drop your file here</p>
                        </>
                      )}

                      {matricLoader && (
                        <div className="flex justify-center items-center h-full">
                          <FileLoader />
                        </div>
                      )}

                      {!matricLoader && showMatric && matricPreview && (
                        <img
                          src={matricPreview}
                          alt="Uploaded Matric Result Preview"
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-bold ml-5 text-red-600">{matricNotify ? "File size is greater than 1MB" : ""}</p>
                  <p className='text-sm text-gray-500 mt-1'>Your file must be less than 1MB</p>
                </div>
              </div>
              {/*Extra Curricular Activites   */}

              <div className='flex flex-col flex-wrap gap-2 pt-10 border-b border-b-gray-200'>
                <div>
                    <h1 className='font-bold text-xl'>Extra curricular Participation</h1>
                </div>
                  
                <div className="flex flex-col gap-5 mt-3 mb-10">
                        <div className="flex items-center gap-3">
                          <input value="Student Council" onChange={handleExtra} type="radio" name="radiobtn" id="student" className="w-5 h-5 accent-[#8200DB]" />
                          <label htmlFor="student" className="text-gray-800">Student Council</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input value="Club Organization"  onChange={handleExtra}  type="radio" name="radiobtn" id="club" className="w-5 h-5 accent-[#8200DB]" />
                          <label htmlFor="club" className="text-gray-800">Club Organization</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input value="Basketball" onChange={handleExtra}  type="radio" name="radiobtn" id="basketball" className="w-5 h-5 accent-[#8200DB]" />
                          <label htmlFor="basketball" className="text-gray-800">Basketball</label>
                        </div>
                      </div>
              </div>
                {/*Submit btn */} 
                
                <div>

              <div className=' flex justify-start  mr-20 mt-5'>
                          {isAcadamicFormValid ? <> <p className="text-green-600 font-semibold mt-2">{validatAcForm}</p></>:   
                          <><p className="text-red-600 font-semibold mt-2">{validatAcForm}</p></>
                          }
                        </div>

                          
            <div  className='flex justify-end  mr-20 mt-5'>
              <button 
              onClick={handleSubmitbtn}
              className='flex items-center justify-center text-white cursor-pointer w-42 h-10 bg-[#AF89EA] hover:bg-[#8200DB]
               hover:font-bold hover:text-white -translate-2  rounded-xl  transition-all duration-800 mt-5 mb-5 '>
                Submit</button>
            </div>
                </div>
            </>
          )}
        </div>
      </div>
    );
  };

  export default Acadamic;
