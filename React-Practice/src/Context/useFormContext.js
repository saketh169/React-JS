import { useState } from 'react';

const useFormContext = (initialDetails) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
  });

  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  return {
    formData,
    setFormData,
    value,
    setValue,
    submitted,
    setSubmitted,
    submissions,
    setSubmissions,
    details: initialDetails,  // Include details if needed
  };
};

export default useFormContext;