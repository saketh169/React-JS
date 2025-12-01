import React from "react";
import genders from './gender.json';

function Form2({
  value,
  setValue,
  formData,
  setFormData,

  setSubmitted,
  setSubmissions,

  details
}){

    

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

     if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      alert('Name must contain only letters and spaces.');
      return;
    }
    
    if (isNaN(formData.age) || formData.age === '' || formData.age < 0 || formData.age > 100) {
      alert('Age must be a valid number between 0 and 100.');
      return;
    }

    if (isNaN(formData.password) || formData.password === ''  || formData.password.length <6) {
      alert('Enter a Minimum 6 digit password');
      return;
    }

    if ( formData.gender === '' ) {
      alert('Gender Must be Selected .');
      return;
    }
    
     if (!formData.name || !formData.email || !formData.age || !formData.gender || !formData.password ) {
      alert('Please fill all fields');
      return;
    }

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


    return(
        <>
        <h1>Registraton Form</h1>
        <form className="form-container" onSubmit={handleSubmit} >
            
            <label htmlFor="name">Name:</label>
            <input className="input-field" name="name" type="text" onChange={handleChange} value={formData.name} />
            
            <label htmlFor="email">Email:</label>
            <input className="input-field" name="email"  type="email"  onChange={handleChange} value={formData.email}   />
            
            <label htmlFor="password">Password:</label>
            <input className="input-field" name="password"  type="password"  onChange={handleChange}  value={formData.password}  />
        
            <label htmlFor="age">Age:</label>
            <input className="input-field" name="age"  type="number"  onChange={handleChange} value={formData.age} />
            
            <label htmlFor="gender">Gender:</label>
            <select className="input-field" name="gender"  onChange={handleChange} value={formData.gender}  >
            {/* <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option> */}

            <option value="">Select an option</option>
            {genders.map((gender,index)=>(
            <option value={gender.type} key={index}>{gender.type}</option>
            ))}
            
            </select>
            
            <input type="text" name="single" value={value} onChange={handleValueChange}  />

            <button className="btn"  type="submit"> Submit</button>
            <button className="btn"  type="reset" onClick={handleReset}>Reset </button>
        </form>
        
        </>
    )
}

export default Form2;