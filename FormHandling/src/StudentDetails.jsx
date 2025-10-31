import { useState, useEffect } from 'react'

function StudentDetails({ student, onUpdateStudent }) {
    const [formData, setFormData] = useState(student)

    // keep local form state in sync when parent updates the student prop
    useEffect(() => {
        setFormData(student)
    }, [student])

    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedData = {
            ...formData,
            [name]: value
        }
        setFormData(updatedData)
        onUpdateStudent(student.rollNo, updatedData)
    }

    return (
        <div className="student-detail">
           <input 
               type="text" 
               name="name"
               value={formData.name} 
               onChange={handleChange}
               placeholder="enter name" 
           />
           <input 
               type="text" 
               name="rollNo"
               value={formData.rollNo} 
               onChange={handleChange}
               placeholder="enter roll No" 
           />
           <input 
               type="text" 
               name="college"
               value={formData.college} 
               onChange={handleChange}
           />
           <input 
               type="number" 
               name="percentage"
               value={formData.percentage} 
               onChange={handleChange}
               placeholder="enter percentage" 
           />           
        </div>
    )
}

export default StudentDetails