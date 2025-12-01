import React from "react";
import genders from './gender.json';
import { useSelector , useDispatch } from "react-redux";
import {setFormData,setValue,setSubmissions ,setSubmitted ,resetForm} from './formSlice'

function Form2({details}){

    const dispatch = useDispatch();
    const {formData , value } = useSelector(state=>state.form);

    const handleChange= (e) =>{
        const {name , value}=e.target;
        dispatch(setFormData({[name]:value}));
    }

    const handleValueChange = (e)=>{ 
        dispatch(setValue(e.target.value));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newSubmission = {...formData , value};
        dispatch(setSubmissions(newSubmission));
        dispatch(setSubmitted(true));
        console.log("Form is :", newSubmission);
        console.log("Form is Submitted SucessFully");
        console.log(details.name);
    }

    const handleReset = () =>{
        dispatch(resetForm());
    }

 return(
    <>
      <h1>Registration Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input className="input-field" name="name" type="text" onChange={handleChange} value={formData.name} required />

        <label htmlFor="email">Email:</label>
        <input className="input-field" name="email" type="email" onChange={handleChange} value={formData.email} required />

        <label htmlFor="password">Password:</label>
        <input className="input-field" name="password" type="password" onChange={handleChange} value={formData.password} required />

        <label htmlFor="age">Age:</label>
        <input className="input-field" name="age" type="number" onChange={handleChange} value={formData.age} required />

        <label htmlFor="gender">Gender:</label>
        <select className="input-field" name="gender" onChange={handleChange} value={formData.gender} required>
          <option value="">Select an option</option>
          {genders.map((gender, index) => (
            <option key={index} value={gender.type}>{gender.type}</option>
          ))}
        </select>

        <input type="text" name="single" value={value} onChange={handleValueChange} placeholder="Extra field" required />

        <button className="btn" type="submit">Submit</button>
        <button className="btn" type="reset" onClick={handleReset}>Reset</button>
      </form>
    </>
 )



}

export default Form2;




