import React from "react";
import Structure from "./features/form/Structure";
//import Counter from "./features/counter/Counter";

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
  
       <Structure details={studentDetails} />
    </>
  )
  
}


export default App