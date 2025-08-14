import { useState,useRef, createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
const UserContext = createContext();

export const UserProvider = ({ children }) => {

 const fetchStud=async()=>{

  const res = await fetch('https://ngu-portal.onrender.com/api/students')

  return res.json()
 }
 const {data:Stud ,loadingstudents,studserror}=useQuery({
  queryKey:'[stud]',
  queryFn:fetchStud
 })
  const profile = Stud?.find(items=> items.id.profile)
 
 const [ImageUrl, setImageurl] = useState( profile ? profile : '/defaultUser.jpg'); // profile iamge setter
 
  
   //for Basic info Form
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [degreeProgram, setDegreeProgram] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender,setGender]=useState('')
  const [permanentAddress, setPermanentAddress] = useState('');
  const [city, setCity] = useState('');
  const [emrfirstName, setEmrFirstName] = useState('');
  const [emrlastName, setemrLastName] = useState('');
  const [Relationship,setRelationship]=useState('')
  const [EmergencyAddress, setEmergencyAddress] = useState('');
  const[ EmrphoneNumber, setEmrPhoneNumber]=useState('')
  const [slide, setSlide] = useState(false)
   // for acadamic form
  const [Acslide,setAcSlide]=useState(false)
  const[hgname,setHgnamel]=useState("")
  const[transcript ,setTranscript]=useState(null)
  const[matric,setMatric]=useState(null)
  const[listTranscript,setListTranscript]=useState([])
  const [extra,setExtra]=useState("")
  const[isBasicFormValid ,setBasicFormValid]=useState(false)
  const[isAcadamicFormValid ,setAcadamicFormValid]=useState(false)
  const [Next,setNext]=useState(false)
  const scrollRef =useRef(null) //the scroll after the next btn clicked 
  const [NumofNotice,setNumofNotice]=useState('')
  const [newMessage, setNewMessage] = useState([])
  const [SubmitLoader, setSubmitLoader] = useState(false);
  const [message, setMessage] = useState("");
  // Send student info to server
  const newStudent = async () => {
   try {
        const res = await fetch('http://localhost:8000/api/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
               firstname: firstName,
               middlename: middleName,
               lastname: lastName,
               student_id: studentNumber,
               email:email,
               phone_number: phoneNumber,
               gender:gender,
               date_of_birth: `${birthYear}-${birthMonth}-${birthDay}`,
               country: countries,
               address: permanentAddress,
               college: "New Generation",
               department: degreeProgram,
               program: `BSC ${degreeProgram}`,
               enrollment: { year: yearLevel, student_type: "Regular" },
               batch: `${date.getFullYear()}`,
               semester: "",
               emergency_contact: emrfirstName,
              password:String(Math.floor(1000 + Math.random() * 9000 ))
             })
           });
     
           const data = await res.json();
           if (!res.ok) {
             console.error('Server Error:', data);
             throw new Error('Failed to post data');
           }
     
           return data; 
     
         } catch (error) {
           console.error('Fetch error:', error.message);
         }
       };
     


  return (
    <UserContext.Provider
      value={{
        slide, setSlide,
        Acslide,setAcSlide,
        ImageUrl, setImageurl,
        firstName, setFirstName,
        middleName, setMiddleName,
        lastName, setLastName,
        studentNumber, setStudentNumber,
        yearLevel, setYearLevel,
        degreeProgram, setDegreeProgram,
        email, setEmail,
        phoneNumber, setPhoneNumber,
        birthMonth, setBirthMonth,
        birthDay, setBirthDay,
        birthYear, setBirthYear,gender,setGender,
        permanentAddress, setPermanentAddress,
        city, setCity,newStudent,
        emrfirstName, setEmrFirstName,
        emrlastName, setemrLastName,
        Relationship,setRelationship,
        EmergencyAddress, setEmergencyAddress,
        EmrphoneNumber, setEmrPhoneNumber,gender,setGender,
        hgname,setHgnamel,message, setMessage,
        transcript ,setTranscript,SubmitLoader, setSubmitLoader,
        matric,setMatric,newMessage, setNewMessage,
        listTranscript,setListTranscript,NumofNotice,setNumofNotice,
        extra,setExtra,isBasicFormValid,setBasicFormValid,Next,setNext,scrollRef,isAcadamicFormValid ,setAcadamicFormValid
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
