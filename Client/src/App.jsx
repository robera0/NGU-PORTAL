import Home from './Components/student/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Payment_info from './Components/student/Payment_info'
import Profile from './Components/student/Profile'
import { UserProvider } from './Components/student/userContext'
import RegistrationForm from './Components/student/RegistrationForm'
import { CountryProvider } from './CountryApi/Countryapi'
import { UserScheduler } from './Context/Scheduler'
import Result from './Components/student/Result'
import Courses from './Components/student/Courses'
import Schedule from './Components/student/Schedule'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Notice from './Components/student/Notice'
import RegistrationPayment from './Components/student/RegistrationPayment'
import Login from './Components/student/Login'
import NewRegistrationForm from './Components/student/NewRegistrationForm'
import Summerize from './Components/student/Summerize'
import HelpAi from './Components/student/HelpAi'
import QA from './Components/student/Q&A'
import Dashboard from './Components/admin/Dashboard'
import { UserAdmin } from './Context/adminContext'
import Students from './Components/admin/Students'
import LoginAdmin from './Components/admin/Login'
const App = () => {
  const queryclient = new QueryClient()
  return (
       <QueryClientProvider client={queryclient}>
        <UserProvider>
           <CountryProvider>
             <UserScheduler>
               <UserAdmin>
                <BrowserRouter>
                    <Routes>
                        <Route>
                          {/*Admin Routes */}
                             <Route path="/loginadmin" element={<LoginAdmin />} />    
                             <Route path="/dashboard" element={<Dashboard />} />    
                              <Route path="/students" element={<Students />} />
                            {/*student Routes */}
                            <Route path="/" element={<Login />} />
                            <Route path="/newregisteration" element={<NewRegistrationForm/>} />
                            <Route path='/registrationpayment' element={<RegistrationPayment />} />
                            <Route path='/home' element={<Home/>}/>
                            <Route path="/paymentinfo" element={<Payment_info/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/registeration' element={<RegistrationForm/>}/>
                            <Route path='/result' element={<Result/>}/>
                            <Route path ='/courses' element= {<Courses/>}/>
                            <Route path='/helpai'  element={<HelpAi/>} />
                            <Route path='/summarize'  element={<Summerize />} />
                            <Route path='/q&a'  element={<QA />} />
                            <Route path='/schedule' element={<Schedule/>}/>
                            <Route path='/notice' element={<Notice/>}/>
                        </Route>
                      </Routes>    
               </BrowserRouter>
             </UserAdmin>
            </UserScheduler>
          </CountryProvider>
      </UserProvider>
  </QueryClientProvider>  
  )
}

export default App