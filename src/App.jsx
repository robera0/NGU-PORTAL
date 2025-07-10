import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Payment_info from './Components/Payment_info'
import Profile from './Components/Profile'
import { UserProvider } from './Components/userContext'
const App = () => {
  return (
        <UserProvider>
                <BrowserRouter>
       <Routes>
         <Route>
            <Route path="/" element={<Home />} />
            <Route path="/paymentinfo" element={<Payment_info/>}/>
            <Route path='/profile' element={<Profile/>}/>
         </Route>
       </Routes>     
    </BrowserRouter>
        </UserProvider>
     
     
   
   
  )
}

export default App