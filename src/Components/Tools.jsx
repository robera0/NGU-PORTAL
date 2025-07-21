import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faDownload, faImage, faPencil, faPrint, faSquarePlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
const Tools = () => {
  return (
    <div className=" w-[15%] mt-40 h-full space-y-5 ">    
       <div  className=" flex  flex-wrap    gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
           <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faSquarePlus} />
           </div>
         <button>Add Item</button>
       </div>
       {/*Edit item */}
       <div className=" flex  flex-wrap    gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
         <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faPencil} />
           </div>
         <button>Edit Item</button>
       </div>
        {/*Delete Item */}
        <div className=" flex  flex-wrap    gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
        <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faTrash} />
           </div>
         <button>Delete Item</button>
       </div>
       {/*save image */}
       <div className=" flex  flex-wrap    gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
         <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faImage} />
           </div>
         <button>Save image</button>
       </div>
       {/*Print */}
       <div className="flex  flex-wrap   gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
         <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faPrint} />
           </div>
         <button>Print</button>
       </div>
       {/*Export */}
       <div className=" flex  flex-wrap    gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
          <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faDownload} />
           </div>
         <button className='flex justify-center items-center'>Export</button>
       </div>
        {/*Import */}
        <div className=" flex flex-wrap  gap-5 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
          <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faUpload} />
           </div>
         <button className='flex justify-center items-center'>Import</button>
       </div>
       {/*New schedule */}
       <div className=" flex flex-wrap gap-5 mb-2 bg-[#AF89EA] cursor-pointer text-white w-45 h-10 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300">
          <div className='flex items-center pl-4' >
             <FontAwesomeIcon icon={faClipboardList} />
           </div>
         <button className='flex justify-center items-center'>New Schedule</button>
       </div>
  </div>
  )
}

export default Tools