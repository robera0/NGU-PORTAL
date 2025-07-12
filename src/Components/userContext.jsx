import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ImageUrl, setImageurl] = useState('');
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


  return (
    <UserContext.Provider
      value={{
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
        EmrphoneNumber, setEmrPhoneNumber
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
