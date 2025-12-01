import React, { useContext } from "react";
import  FormContext  from "./FormContext";

function Display(){

    const{
        
    submitted,
    submissions,
    formData,
    value } =useContext(FormContext);
    
 return(
    <>
     <h1> Form Data</h1>
      <div className='result' style={{backgroundColor:submitted?'blue':'orange'}}>
        {submitted && (
          <>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Age: {formData.age}</p>
          <p>Gender: {formData.gender}</p> 
          <p>Value:{value}</p>
          </>
        )}
      </div>

      <h1> All Forms </h1>
      <div  >
        { submissions.map((sub,index)=>(
            <>
             <div key={index} className='forms' style={{backgroundColor:(index%2==0)? 'blue' :'orange'}}>
              <p>Name: {sub.name}</p>
              <p>Email: {sub.email}</p>
              <p>Value : {sub.value}</p>
            </div>
             <br />
            </>

        ))

        }
      </div>
    </>
 )
}

export default Display;