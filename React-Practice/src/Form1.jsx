import React from 'react';
import { useState } from 'react';
import genders from './gender.json';

function Form1({details}) {

  
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


  const handleChange =(e)=>{
    const{name , value }=e.target;
  
    setFormData({
      ...formData,
      [name]:value

    });

   
  };

  const handleValueChange =(e)=>{
     setValue(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

  
    const newSubmission = { ...formData , value };
    setSubmissions(prevSubmissions =>[...prevSubmissions , newSubmission]);

    console.log("Form is Submitted" , formData);
    console.log("value is" , value);
    setSubmitted(true);
    alert("Form is Submitted Sucessfully");
     console.log(details.name);
    
  };

  const handleReset = ()=>{
    setFormData({
        name:'',
        email:'',
        age:'',
        gender:'',
        password:''

    });
    setValue('');
    setSubmitted(false);
  };

  

  return (
    <>
      <h1>Registraton Form</h1>
      <form className="form-container" onSubmit={handleSubmit} >
         
        <label htmlFor="name">Name:</label>
        <input className="input-field" name="name" type="text" onChange={handleChange} value={formData.name} required/>
        
        <label htmlFor="email">Email:</label>
        <input className="input-field" name="email"  type="email"  onChange={handleChange} value={formData.email}  required />
        
        <label htmlFor="password">Password:</label>
        <input className="input-field" name="password"  type="password"  onChange={handleChange}  value={formData.password} required />
       
        <label htmlFor="age">Age:</label>
        <input className="input-field" name="age"  type="number"  onChange={handleChange} value={formData.age} required/>
        
        <label htmlFor="gender">Gender:</label>
        <select className="input-field" name="gender"  onChange={handleChange} value={formData.gender}  required>
          {/* <option value="">Select an option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option> */}

        
        <option value=""> Selct an option </option>
        {genders.map((gender,index)=>(
          <option key={index} value={gender.type}>{gender.type}</option>
        ))}
       </select>

        <h1> Display Results :</h1>
      
          {submissions.map((sub,index)=>(
             <div key={index} style={{backgroundColor:(index%2===0 ?'blue':'orange')}}>
               <p>{sub.name}</p>
               <p>{sub.age}</p>
              
             </div>
          ))}
      
         
         <input type="text" name="single" value={value} onChange={handleValueChange} required />

        <button className="btn"  type="submit"> Submit</button>
        <button className="btn"  type="reset" onClick={handleReset}>Reset </button>
      </form>

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

export default Form1
