import { useState,createContext, useContext } from "react";

const UserContext = createContext();


export const UserScheduler =({children}) =>{

 const [courseTitle,setCourseTitle]=useState("")
 const[subtitle,setSubtitle]=useState("")
 const [AddItem,setAddItems]=useState(false)
 const[deleteItem,setDeleteItem]=useState(false)
 const[EditItems,setEditItem]=useState(false)
 const[saveImage,setSaveImage]=useState(false)
 const[print,setPrint]=useState(false)
 const[Export,setExport]=useState(false)
 const[Import,setImport]=useState(false)
 const[newSchedule,setNewschedule]=useState(false)
 const[color,setColor]=useState("")
 const [startTime,setStart]=useState("")
 const[startMin,setStartmin]=useState("")
 const [endMin,setEndMin]=useState("")
 const [endtime,setEnd]=useState("")
 const [Am,setAm]=useState(true)
 const [Pm,setPm]=useState(false)
 const [courseType,setCourseType]=useState("")
 const[instructor,setinstructor]=useState("")
 const [Location,setLocation]=useState("")
 const[day,setday]=useState(null)
 const[AddContent,setAddContent]=useState(false)
 const [AllInfo,setAllInfo]=useState({})

    return(
        <UserContext.Provider value ={{
        courseTitle,setCourseTitle,subtitle,setSubtitle,
        AddItem,setAddItems,EditItems,setEditItem,
        saveImage,setSaveImage,print,setPrint,Export,setExport,
        Import,setImport,newSchedule,setNewschedule,
        color,setColor,startTime,setStart,setAllInfo,
        endtime,setEnd,Am,setAm,Pm,setPm,courseType,setCourseType,
        instructor,setinstructor,Location,setLocation,
        AllInfo,startMin,setStartmin,endMin,setEndMin,day,setday,AddContent,setAddContent,deleteItem,setDeleteItem
    }
    }
        >

            {children}
        </UserContext.Provider>
    );
};

export const useSchedule = ()=>useContext(UserContext)