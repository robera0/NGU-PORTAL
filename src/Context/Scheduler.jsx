import { useState,createContext, useContext } from "react";

const UserContext = createContext();


export const UserScheduler =({children}) =>{

 const [courseTitle,setCourseTitle]=useState("")
 const[subtitle,setSubtitle]=useState("")
  const [AddItem,setAddItems]=useState(false)
  const[color,setColor]=useState("")
    return(
        <UserContext.Provider value ={{courseTitle,setCourseTitle,subtitle,setSubtitle,AddItem,setAddItems,color,setColor}}

        >

            {children}
        </UserContext.Provider>
    );
};

export const useSchedule = ()=>useContext(UserContext)