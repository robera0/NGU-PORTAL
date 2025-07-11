import { useState, createContext, useContext } from "react";

const UserContext = createContext()

export const UserProvider =({children}) =>{

const[ImageUrl,setImageurl]=useState('')
const[country,setCountry]=useState([])


return (
    <UserContext.Provider value={{ ImageUrl,setImageurl,country,setCountry }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);