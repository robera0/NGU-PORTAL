import Basicinfo from './Basicinfo'
import Acadamic from './Acadamic'
import { useUser } from './userContext'
import { Link } from 'react-router-dom'
  import Loader from '../Inputs/SubmitLoader';

const NewRegistrationForm = () => {
const {isFormValid,SubmitLoader,message}=useUser()
  return (
   <>
      {/* Main Content */}
       <div className=' ml-5 h-full w-[100%]'>
        {SubmitLoader ? 
          <>
          <Loader/>
          </>  
          :
          <>
          <div className='mt-2 border-t border-t-[#8200DB] w-[98%] mt-10 shadow-2xl pl-4 rounded-xl flex flex-col overflow-y-auto'>
        {/* Header */}
        <div className='pt-10 '>
          <div className='flex mb-5 justify-between'>
            <div className='flex w-[50%] gap-6'>
              <div
                style={{ backgroundImage: `url("/download.jpeg")` }}
                className="w-28 h-28 rounded-full bg-gray-200 bg-center bg-cover bg-no-repeat"
              ></div>
              <div className='flex items-center'>
                <h1 className='font-bold text-xl'>New Generation University College</h1>
              </div>
            </div>
            <div className='w-[50%] text-right font-medium text-gray-600 pr-10 space-y-1 text-sm'>
              <h1 className="text-base font-semibold text-gray-700">ACME CITY COLLEGE</h1>
              <p>123 Maple Street, Houston, TX, 77002</p>
              <p>example@example.com</p>
              <p>www.example.com</p>
              <p>(123) 1234567</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-8'>
            {message && (
                  <p>{message} <Link to='/'>Login</Link></p>
                )}
          <h1 className='font-bold text-3xl'>STUDENT REGISTRATION FORM</h1>
        </div>

        {/* Basic Info Section */}
        <div className={`h-full mt-10 px-8 transition-translate duration-300`}>
                <Basicinfo/>   
        </div>
        {/*Acadamic information */}
         <div className={`h-full mt-10 px-8 transition-translate duration-300`}>
           <Acadamic/>
         </div>
           {isFormValid  && <>
           
             <div>
              <p className="text-green-600 font-semibold mt-2">You have successfully sumbites your form</p>
             </div>
           </>}
       
      </div>
      {

      }
        <div className='mt-4 ml-5'>already a Student?
          <Link className='text- text-[#8200DB]' to='/'> Login</Link>
        </div>

          </>
      }
         
       </div>
       </>
      
   
  )
}

export default NewRegistrationForm
