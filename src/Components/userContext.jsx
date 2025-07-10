import { useState, createContext, useContext } from "react";

const UserContext = createContext()

export const UserProvider =({children}) =>{

const[ImageUrl,setImageurl]=useState('')

return (
    <UserContext.Provider value={{ ImageUrl,setImageurl }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);