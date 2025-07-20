import Home from './Components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Payment_info from './Components/Payment_info'
import Profile from './Components/Profile'
import { UserProvider } from './Components/userContext'
import RegistrationForm from './Components/RegistrationForm'
import { CountryProvider } from './CountryApi/Countryapi'
import Result from './Components/Result'
import Courses from './Components/Courses'
import Schedule from './Components/Schedule'
const App = () => {
  return (
      
        <UserProvider>
           <CountryProvider>
                <BrowserRouter>
       <Routes>
         <Route>
            <Route path="/" element={<Home />} />
            <Route path="/paymentinfo" element={<Payment_info/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/registeration' element={<RegistrationForm/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path ='/courses' element= {<Courses/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
         </Route>
       </Routes>     
    </BrowserRouter>
    </CountryProvider>
          </UserProvider>
     
     
   
   
  )
}

export default App