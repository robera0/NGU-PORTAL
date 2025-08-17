import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faDownload, faImage, faPencil, faPrint, faSquarePlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useSchedule } from '../../Context/Scheduler'

const Tools = () => {
  const { setAddItems,setDeleteItem ,setEditItem,setSaveImage,
      setPrint,setExport,setImport,setNewschedule
  } = useSchedule()
  const handleAddItem = () => setAddItems(true) 
  const handleDeleteItem=()=>setDeleteItem(true)
  const handleEditItem=()=>setEditItem(true)
  const handleNewSchedule=()=>setNewschedule(true)


  const tools = [
    { icon: faSquarePlus, label: 'Add Item', onClick: handleAddItem,handleDeleteItem,handleNewSchedule },
    { icon: faPencil, label: 'Edit Item' },
    { icon: faTrash, label: 'Delete Item' },
    { icon: faImage, label: 'Save Image' },
    { icon: faPrint, label: 'Print' },
    { icon: faDownload, label: 'Export' },
    { icon: faUpload, label: 'Import' },
    { icon: faClipboardList, label: 'New Schedule' },
  ]

  return (
    <div className="w-full sm:w-[45%] md:w-[25%] lg:w-[15%] mt-10 sm:mt-20 px-4 space-y-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          onClick={tool.onClick}
          className="flex items-center gap-3 bg-[#AF89EA] text-white w-full h-10 rounded-lg font-bold px-2 hover:bg-purple-700 transition-all duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={tool.icon} />
          <span className="text-sm sm:text-base">{tool.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Tools
