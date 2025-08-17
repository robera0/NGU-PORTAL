import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {

    const navigate=useNavigate()
   
    const[Id,setId]=useState('')
    const[password,setPassword]=useState("")

    const handleId=(e)=>{
        setId(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const fetchStudent =async()=>{
        const res = await fetch('http://localhost:8000/api/students')
        
        return res.json()
    }

    const {data:students}=useQuery({
        queryKey:['student'],
        queryFn:fetchStudent
    })



const findStudent = students?.find(
  (s) => s.student_id === Id && s.password === password
);
  const handleSignin=()=>{
     console.log(findStudent)
     if(findStudent){
        navigate('/home')
     }

  }


  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 max-w-5xl w-full transition-transform hover:scale-[1.01] duration-300">
        
        {/* Left Side Illustration */}
        <div className="hidden md:flex flex-col w-1/2  p-10 items-center justify-center">
          <img
            src="./Graduation.jpeg"
            alt="Graduation illustration"
            className="w-3/4 h-auto rounded-2xl shadow-lg border border-white/20"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10">
          <div className="w-full max-w-sm">
            {/* Header */}
            <div className="w-full mb-6 flex justify-end items-center">
              <span className="text-sm text-gray-600 mr-2">New here?</span>
              <Link to='/newregisteration' className="text-sm font-semibold text-purple-700 hover:underline">
                Register
              </Link>
            </div>

            <h1 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-tight">
              Welcome Back
            </h1>

            {/* Form */}
            <form className="space-y-5">
              {/* Student ID */}
              <div className="flex items-center bg-white/60 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-400 mr-3" 
                  fill="none" viewBox="0 0 24 24" 
                  stroke="currentColor" strokeWidth="2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 
                  4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  onChange={handleId}
                  name="studentId"
                  placeholder="Enter Student ID"
                  className="flex-1 bg-transparent focus:outline-none placeholder-gray-500"
                />
              </div>

              {/* Password */}
              <div className="flex items-center bg-white/60 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-400 mr-3" 
                  fill="none" viewBox="0 0 24 24" 
                  stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                   onChange={handlePassword}
                  name="password"
                  placeholder="Password"
                  className="flex-1 bg-transparent focus:outline-none placeholder-gray-500"
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                onClick={handleSignin}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition"
              >
                Sign in
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              © 2025 Student Portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
