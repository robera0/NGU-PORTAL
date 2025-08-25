//for admin values

import { useState,createContext, useContext } from "react";

const UserContext = createContext();


export const UserAdmin =({children}) =>{

 const[down,setDown]=useState(false)
 const[rightSlide,setrightSlide]=useState(false)
 const[filtered,setFiltered]=useState([])
 const[chatslide,setChatSlide]=useState(false)
 const[notify,setNotify]=useState(false)
    return(
        <UserContext.Provider value ={{
        down,setDown,rightSlide,setrightSlide,filtered,setFiltered,chatslide,setChatSlide,
        notify,setNotify
    }
    }
        >

            {children}
        </UserContext.Provider>
    );
};

export const useAdmin = ()=>useContext(UserContext)