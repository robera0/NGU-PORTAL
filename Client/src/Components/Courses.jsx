import { useState } from "react";

const Courses = () => {
  
const url = 'https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/?page=1&page_size=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2a38841ee4msh07f8a4b17161bbcp17fb7bjsn3668ad1a36ac',
		'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com'
	}
};

 const handleFetchApi= async()=>{

   try {
	const response = await fetch(url, options);
	const result = await response.text();
   

  console.log((result))

} catch (error) {
	console.error(error);
}
 }
 const [courseList,setCpuseList]=useState([])

  return (
      <div>
        <button onClick={handleFetchApi}>Fetch api</button>
        <div>
          {courseList}
        </div>



      </div>
  
    
  )
}

export default Courses