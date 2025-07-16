import React, { useRef } from 'react'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUser } from './userContext'
import { useCountryApi } from '../CountryApi/Countryapi';
const Basicinfo = () => {
      const Month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const date = new Date()
  const MonthNum = date.getUTCDate()


  const startYear = 1997;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const handleSlide = () => {
    setSlide(prev => !prev)
  }



  const {
    slide, setSlide,
    firstName, setFirstName,
    middleName, setMiddleName,
    lastName, setLastName,
    studentNumber, setStudentNumber,
    yearLevel, setYearLevel,
    degreeProgram, setDegreeProgram,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    birthMonth, setBirthMonth,
    birthDay, setBirthDay,
    birthYear, setBirthYear,
    permanentAddress, setPermanentAddress,
    city, setCity,
    emrfirstName, setEmrFirstName,
    emrlastName, setemrLastName,
    Relationship,setRelationship,
    EmergencyAddress, setEmergencyAddress,
    EmrphoneNumber, setEmrPhoneNumber,
    countries, setCountries,setBasicFormValid,setAcSlide,AcSlide,scrollRef
  } = useUser();

const {Selectedcountry}=useCountryApi()

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleMiddleNameChange = (e) => setMiddleName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleStudentNumberChange = (e) => setStudentNumber(e.target.value);
  const handleYearLevelChange = (e) => setYearLevel(e.target.value);
  const handleDegreeProgramChange = (e) => setDegreeProgram(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBirthMonthChange = (e) => setBirthMonth(e.target.value);
  const handleBirthDayChange = (e) => setBirthDay(e.target.value);
  const handleBirthYearChange = (e) => setBirthYear(e.target.value);
  const handlePermanentAddressChange = (e) => setPermanentAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountries(e.target.value);
  const handleEmrFirstNameChange = (e) => setEmrFirstName(e.target.value);
  const handleEmrLastNameChange = (e) => setemrLastName(e.target.value);
  const handleRelationship=(e)=>setRelationship(e.target.value);
  const handleEmergencyAddress=(e)=>setEmergencyAddress(e.target.value);
  const handleEmrPhoneNumberChange = (e) => setEmrPhoneNumber(e.target.value);
  
 const handleNextbtn = () => {
  setAcSlide(true); 

  setTimeout(() => {
    if (scrollRef.current ) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth',
                                      block :"end",
                                    inline:"nearest"});
    }
  }, 100); 
};
 
  const Filled = firstName && setFirstName &&
                middleName && setMiddleName &&
                lastName && setLastName &&
                studentNumber && setStudentNumber &&
                yearLevel && setYearLevel &&
                degreeProgram && setDegreeProgram &&
                email && setEmail &&
                phoneNumber && setPhoneNumber &&
                birthMonth && setBirthMonth &&
                birthDay && setBirthDay &&
                birthYear && setBirthYear &&
                permanentAddress && setPermanentAddress &&
                city && setCity &&
                emrfirstName && setEmrFirstName &&
                emrlastName && setemrLastName &&
                Relationship && setRelationship &&
                EmergencyAddress && setEmergencyAddress &&
                EmrphoneNumber && setEmrPhoneNumber 

   if(Filled){

    setBasicFormValid(true)
    
   }
  return (
    <div>
                  <div
            onClick={handleSlide}
            className={`${slide ? "text-white " : "-translate-6 "} flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-200  rounded-xl shadow-sm hover:bg-[#8200DB] hover:text-white transition`}
            style={slide ? { backgroundColor: "#8200DB" } : {}}
          >
            <h2 className='text-xl font-semibold'>Basic Information</h2>
            <div className={` ${slide ? 'rotate-[-90deg] text-[#8200DB] font-bold  bg-white' : 'rotate-0 bg-[#AF89EA]'} h-10 w-10 flex justify-center items-center rounded-full  transition-transform duration-300`}>
              <FontAwesomeIcon className={`${!slide && "text-white"}`} icon={faArrowLeft} />
            </div>
          </div>

          {/* Slide Down Form Section */}
          <div
            className={`transition-all duration-500 overflow-hidden  ${
              slide ? 'max-h-[4000px] mt-6 px-6 overflow-y-auto' : 'max-h-0 px-6'
            }`}
          >
            {slide && (
              <>
                <p className='font-semibold mb-3'>Full Name</p>
                <div className='flex flex-wrap gap-6'>
                  {/* First Name */}
                  <div className='space-y-1'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>First Name</p>
                  </div>

                  {/* Middle Name */}
                  <div className='space-y-1'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={middleName}
                      onChange={handleMiddleNameChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>Middle Name</p>
                  </div>

                  {/* Last Name */}
                  <div className='space-y-1'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={lastName}
                      onChange={handleLastNameChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>Last Name</p>
                  </div>
                </div>

                {/* Student number */}
                <div className='flex flex-wrap gap-26'>
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Student Number</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={studentNumber}
                      onChange={handleStudentNumberChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>eg : 20/2324</p>
                  </div>

                  {/* Year Level */}
                  <div className='space-y-1 mt-10'>
                    <p className='font-semibold mb-3'>Year Level</p>
                    <select
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={yearLevel}
                      onChange={handleYearLevelChange}
                      required
                    >
                      <option className='text-gray-500' value="">Please Select</option>
                      <option className='text-gray-500' value="1st year">1st year</option>
                      <option className='text-gray-500' value="2nd year">2nd year</option>
                      <option className='text-gray-500' value="3rd year">3rd year</option>
                      <option className='text-gray-500' value="4th year">4th year</option>
                      <option className='text-gray-500' value="5th year">5th year</option>
                    </select>
                    <p className='text-sm text-gray-500'>1 year (if you're a freshman)</p>
                  </div>
                </div>

                {/* Degree Program */}
                <div className='flex flex-wrap gap-26'>
                  <div className='space-y-1 mt-10'>
                    <p className='font-semibold mb-3'>Degree Program</p>
                    <select
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={degreeProgram}
                      onChange={handleDegreeProgramChange}
                      required
                    >
                      <option className='text-gray-500' value="">Please Select</option>
                      <option className='text-gray-500' value="cs">Computer Science</option>
                      <option className='text-gray-500' value="bm">Business Management</option>
                      <option className='text-gray-500' value="eng">Engineering</option>
                    </select>
                    <p className='text-sm text-gray-500'>Choose your program</p>
                  </div>

                  {/* Email */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Email</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>username@gmail.com</p>
                  </div>

                  {/* Phone Number */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Phone Number</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="tel"
                      pattern="^(\+2519\d{8})$"
                      inputMode="numeric"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>+251</p>
                  </div>
                </div>

                <div className='flex flex-wrap gap-26'>
                  {/* Birth Month */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Birth Month</p>
                    <select
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={birthMonth}
                      onChange={handleBirthMonthChange}
                      required
                    >
                      <option value="">Please Select Month</option>
                      {Month.map((m, index) => (
                        <option key={index} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Birth Day */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Birth Day</p>
                    <select
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={birthDay}
                      onChange={handleBirthDayChange}
                      required
                    >
                      <option value="">Please Select Day</option>
                      {[...Array(31).keys()].map(day => (
                        <option key={day + 1} value={day + 1}>{day + 1}</option>
                      ))}
                    </select>
                  </div>

                  {/* Birth Year */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Birth Year</p>
                    <select
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={birthYear}
                      onChange={handleBirthYearChange}
                      required
                    >
                      <option value="">Please Select Year</option>
                      {years.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className=' flex-wrap gap-26'>
                  {/* Permanent Address */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Permanent Address</p>
                    <input
                      className="w-86 h-10 px-90 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={permanentAddress}
                      onChange={handlePermanentAddressChange}
                    />
                  </div>
                  
                  <div className='flex flex-wrap gap-26'>
                        {/* City */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-5'>City</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={city}
                      onChange={handleCityChange}
                    />
                  </div>

                  {/* Country */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-5'>Country</p>
                    <select
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={countries}
                      onChange={handleCountryChange}
                      required
                    >
                      <option value="">Select Country</option>
                      {Selectedcountry.map((c, index) => (
                        <option key={index} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  </div>

                 
                </div>
                
               <div className='flex flex-wrap gap-26 mt-10 '>
                  {/* Emergency contact */}
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3'>Emergency contact</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={emrfirstName}
                      onChange={handleEmrFirstNameChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>First Name</p>
                  </div>

                  {/* Last Name */}
                  <div className='space-y-1 mt-8'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={emrlastName}
                      onChange={handleEmrLastNameChange}
                      required
                    />
                    <p className='text-sm text-gray-500'>Last Name</p>
                  </div>
                     {/*Relationship */}
                   <div className='space-y-1'>
                    <p className='font-semibold mb-3'>Relationship</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={Relationship}
                      onChange={handleRelationship}
                      required
                    />
                    <p className='text-sm text-gray-500'>ex. Father, Mother, etc.</p>
                  </div>
                </div>
                     {/* Emergency Permanent Address */}
                 <div className=' flex-wrap gap-26'>
                  <div className='space-y-1'>
                    <p className='font-semibold mb-3 mt-10'>Address Of Person To Contact In Case Of Emergency</p>
                    <input
                      className="w-86 h-10 px-90 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      value={EmergencyAddress}
                      onChange={handleEmergencyAddress}
                    />
                  </div>
                  {/*  Emergency Phone Number */}
                  <div className='space-y-1 mb-2'>
                    <p className='font-semibold mb-3 mt-10'>  Emergency Phone Number</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="tel"
                      placeholder='+251'
                      pattern="^(\+2519\d{8})$"
                      inputMode="numeric"
                      value={EmrphoneNumber}
                      onChange={handleEmrPhoneNumberChange}
                      required
                    />
                  </div>

                  {/*Next */}
                  
                    <div  className='flex justify-end  mr-20 mt-5'>
                        <button 
                        onClick={handleNextbtn}
                        className='flex items-center justify-center text-white cursor-pointer w-42 h-10 bg-[#AF89EA] hover:bg-[#8200DB] hover:font-bold hover:text-white -translate-2  rounded-xl  transition-all duration-800 mt-5 mb-5 '>Next</button>
                      </div>
                      </div>  
               
              </>
            )}
          </div>
    </div>
  )
}

export default Basicinfo