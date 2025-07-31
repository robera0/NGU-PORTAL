import { useState,useRef, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
  const [ImageUrl, setImageurl] = useState('src/assets/defaultUser.jpg'); // profile iamge setter
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
        birthYear, setBirthYear,
        permanentAddress, setPermanentAddress,
        city, setCity,
        emrfirstName, setEmrFirstName,
        emrlastName, setemrLastName,
        Relationship,setRelationship,
        EmergencyAddress, setEmergencyAddress,
        EmrphoneNumber, setEmrPhoneNumber,
        hgname,setHgnamel,
        transcript ,setTranscript,
        matric,setMatric,
        listTranscript,setListTranscript,
        extra,setExtra,isBasicFormValid,setBasicFormValid,Next,setNext,scrollRef,isAcadamicFormValid ,setAcadamicFormValid
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
