import { faPlus,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const RightSideBar = () => {
  return (
    <div>
        <div className=' scroll-box bg-white w-90 h-screen shadow-2xl flex flex-col pt-4  items-center'>
            {/*header */}
              <div className=' flex justify-start gap-12 '>
                  <div className=''>
                    <h1>Recent Students</h1>
                    <p className='text-gray-400 mt-1'>You have 456 students</p>
                  </div>
                   
                   <div >
                     <button className='w-10 h-10 justify-center flex items-center  rounded-full bg-purple-700 hover:bg-purple-500 duration-300 cursor-pointer'>
                         <FontAwesomeIcon className="text-lg text-white font-bold cursor -pointer " icon={faPlus} />
                          </button>
                   </div>
              </div>
              {/*students */}
                <div className='mt-8 flex flex-col space-y-10'>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-cover rounded-full bg-orange-500 flex justify-center items-center"
                       style={{backgroundImage: `url("/defaultUser.jpg")` }}
                       >
                      </div>
                      <div>
                        <h1 className="font-bold text-lg text-purple-600">Samantha William</h1>
                         <p className='text-gray-400'>class VllA</p>
                    </div>
                     <div className=" group w-12 h-12 border rounded-full hover:bg-purple-500 flex justify-center items-center duration-300">
                          <FontAwesomeIcon
                           className="text-lg group-hover:text-white text-purple-700 duration-300"
                            icon={faEnvelope}/>
                      </div>        
              </div>
                   <div className='group flex justify-center border-none bg-purple-100 p-3 rounded-2xl hover:bg-purple-700 cursor-pointer duration-300 '>
                        <button className='text-purple-900 font-bold cursor-pointer group-hover:text-white'>View more</button>
                        </div>
                </div>
                   {/*Messages */}
                    <div className='pt-4 space-y-5 '>
                       <div className='flex justify-start mt-5'>
                          <h1 className='text-purple-700 font-bold text-md'>Message</h1>
                       </div>
                          <div className="flex gap-4  border-b border-gray-400 mt-3 space-y-6 ">
                      <div className="w-12 h-12 bg-cover rounded-full bg-orange-500 flex justify-center items-center"
                       style={{backgroundImage: `url("/defaultUser.jpg")` }}
                       >
                      </div>
                      <div className=''>
                        <h1 className="font-bold text-lg text-purple-600">Samantha William</h1>
                         <p className="truncate w-39 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, illum consequuntur voluptatem, obcaecati fuga assumenda perferendis quis eligendi officia, fugit dolore eaque eos. Quod cumque, temporibus illo quibusdam odit ducimus.</p>                     
                    </div>
                       <div className=''>
                           <p className='text-gray-400'> 12:45 PM </p>
                       </div>     
                    </div>
                     <div className='group flex justify-center border-none bg-purple-100 p-3 rounded-2xl hover:bg-purple-700 cursor-pointer duration-300 '>
                        <button className='text-purple-900 font-bold cursor-pointer group-hover:text-white'>View more</button>
                        </div>
                    </div>

                  {/*food Menu */}
                   <div className='pt-4 space-y-3 '>
                     <div className='flex justify-start mt-5'>
                          <h1 className='text-purple-700 font-bold text-md'>Current Food menu</h1>
                       </div>
                       <div>
                        <div className='bg-gray-300 w-70 h-40 rounded-md'>
                           <img src="null" alt="" />
                        </div>
                         <div className='mt-2'>
                           <h1 className='text-purple-700 font-bold text-md'>Beef Steak with fried Potato</h1>
                           <p className="truncate w-39 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, illum consequuntur voluptatem, obcaecati fuga assumenda perferendis quis eligendi officia, fugit dolore eaque eos. Quod cumque, temporibus illo quibusdam odit ducimus.</p> 
                         </div>
                       </div>
                          <div className='group flex justify-center border-none bg-purple-100 p-3 rounded-2xl hover:bg-purple-700 cursor-pointer duration-300 '>
                        <button className='text-purple-900 font-bold cursor-pointer group-hover:text-white'>View more</button>
                        </div>
                   </div>
        </div>
    </div>
  )
}

export default RightSideBar