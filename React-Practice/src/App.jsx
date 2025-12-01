import React from 'react';
import Form1 from './Form1';
import Json from './Json';
import Structure from './Context/Structure';

//import Structure from './Structure';

function App() {
  
  const studentDetails={
    name:"saketh",
    age:"20",
    gender:"male",
    password:"1234",
    email:"saketh123@gmail.com"
  }

  
  return (
    <>
       {/* <Form1 details={studentDetails} /> */}
      {/* <Json/> */} 
      
     <Structure details={studentDetails} /> 

       {/* <Structure details={studentDetails} /> */}
    </>
  )
}

export default App
