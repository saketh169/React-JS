import React, { useContext } from "react";
import genders from '../gender.json';
import  FormContext  from "./FormContext";    

function Form(){

    const{
     value,
     setValue,
     formData,
     setFormData,
     setSubmitted,
     setSubmissions,
     details
    } = useContext(FormContext);


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

   // const newSubmission = { ...formData , value };
    setSubmissions(prevSubmissions =>[...prevSubmissions , formData]);

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


    return(
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

            <option value="">Select an option</option>
            {genders.map((gender,index)=>(
            <option value={gender.type} key={index}>{gender.type}</option>
            ))}
            
            </select>
            
            <input type="text" name="single" value={value} onChange={handleValueChange} required />

            <button className="btn"  type="submit"> Submit</button>
            <button className="btn"  type="reset" onClick={handleReset}>Reset </button>
        </form>
        
        </>
    )
}

export default Form;