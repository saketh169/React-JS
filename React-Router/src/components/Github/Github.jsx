
//import React , {useEffect,useState} from 'react'
 import {useLoaderData} from 'react-router-dom'


function Github() {

  const data=useLoaderData()
/*
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/saketh169')
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setData(data)
    })

    
    },[]) */
  
  return(
    <div className='text-center text-3xl p-4 bg-gray-600 text-white'>
    Github Followers : {data.followers}
    <img className='mt-8' src={data.avatar_url} alt="Profile Image" width={300} />
  </div>
  );

    
}

export default Github;


  