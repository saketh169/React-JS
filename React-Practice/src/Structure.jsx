import React from 'react';
import Form2 from './Form2';
import Display from './Display';
import { useState } from 'react';


function Structure({details}){

    const[formData , setFormData] = useState(
        {
          name:'saketh',
          email:'',
          password:'',
          age:'',
          gender:'',
        }
      );

    const[value,setValue]=useState('');
    const[submitted , setSubmitted]=useState(false);
    const[submissions , setSubmissions]=useState([]);


    return(
        <>
        <Form2
          value={value}
          setValue={setValue}

          formData={formData}
          setFormData={setFormData}

          submitted={submitted}
          setSubmitted={setSubmitted}

          submissions={submissions}
          setSubmissions={setSubmissions}

          details={details}
        
        />
        <Display

        formData={formData}
        submissions={submissions}
        submitted={submitted}
        value={value}
      
        />
        
        </>
    );

}


export default Structure;
