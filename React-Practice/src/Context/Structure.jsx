import React from 'react';
import Form from './Form';
import Display from './Display';
//import { useState } from 'react';
import FormContext from './FormContext';
import useFormContext from "./useFormContext";

function Structure({details}){


   const formState=useFormContext(details);
  
    // const[formData , setFormData] = useState(
    //     {
    //       name:'saketh',
    //       email:'',
    //       password:'',
    //       age:'',
    //       gender:'',
    //     }
    //   );

    // const[value,setValue]=useState('');
    // const[submitted , setSubmitted]=useState(false);
    // const[submissions , setSubmissions]=useState([]);
 

    

    return(
        <>

        <FormContext.Provider value={
          formState
        //   {
        //     formData,
        //     setFormData,
        //     submitted,
        //     setSubmitted,
        //     submissions,
        //     setSubmissions,
        //     details,
        //     value,
        //     setValue
        // }
        }>
         <Form />
         <Display />
        </FormContext.Provider>   
       

        </>
    );

}


export default Structure;
