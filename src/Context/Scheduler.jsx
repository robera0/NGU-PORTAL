import { useState,createContext, useContext } from "react";

const UserContext = createContext();


export const UserScheduler =({children}) =>{

 const [courseTitle,setCourseTitle]=useState("")

    return(
        <UserContext.Provider value ={{courseTitle,setCourseTitle}}

        >

            {children}
        </UserContext.Provider>
    );
};

export const useSchedule = ()=>useContext(UserContext)