import { createSlice } from "@reduxjs/toolkit";

const initialState ={

    formData:{
        name:'saketh',
        email: '',
        password: '',
        age: '',
        gender: '',
        },
        value: '',
        submitted: false,
        submissions: [],

 };


const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {

    setFormData:(state,action) =>{
        state.formData ={...state.formData, ...action.payload};
    },
    setValue :(state,action)=>{
        state.value=action.payload;
    },
    setSubmitted:(state,action)=>{
        state.submitted=action.payload;
    },
    setSubmissions : (state,action)=>{
        state.submissions.push(action.payload);
    },

    resetForm : (state)=>{
        state.formData = initialState.formData;
        state.value='';
        state.submitted=false;
        state.submissions=[];
    },

  } 
});

export const { setFormData, setValue, setSubmitted, setSubmissions, resetForm  } = formSlice.actions;
export default formSlice.reducer;
