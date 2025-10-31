import 'react';
import { useState, useEffect } from 'react'
import StudentCard from './StudentCard.jsx'

function StudentList(){
   const initialStudents = () => {
    try {
      const raw = localStorage.getItem('students')
      if (raw) return JSON.parse(raw)
    } catch (e) {
      console.warn('Failed to read students from localStorage', e)
    }
    return [
      {name:"Vineeth",rollNo:"S20230010159",percentage:"95",college:"IIITS"},
      {name:"Darshan",rollNo:"S20230010067",percentage:"93",college:"IIITS"},
      {name:"Pavan",rollNo:"S20230010157",percentage:"92",college:"IIITS"},
      {name:"Sriram",rollNo:"S202300100164",percentage:"89",college:"IIITS"},
      {name:"Pradeep",rollNo:"S20230010165",percentage:"86",college:"IIITS"},
      {name:"Saketh",rollNo:"S20230010169",percentage:"92",college:"IIITS"},
      {name:"OmSai",rollNo:"S20230010070",percentage:"76",college:"IIITS"},
      {name:"Narender",rollNo:"S20230010149",percentage:"79",college:"IIITS"},
      {name:"student3",rollNo:"S20230010893",percentage:"46",college:"IIITS"},
      {name:"student4",rollNo:"S20230010899",percentage:"74",college:"IIITS"},
      {name:"student5",rollNo:"S20230010892",percentage:"86",college:"IIITS"},
      {name:"student6",rollNo:"S20230010772",percentage:"65",college:"IIITS"},
    ]
  }

  const [students, setStudents] = useState(initialStudents)

  // persist to localStorage whenever students change
  useEffect(() => {
    try {
      localStorage.setItem('students', JSON.stringify(students))
    } catch (e) {
      console.warn('Failed to save students to localStorage', e)
    }
  }, [students])

  const updateStudent = (rollNo, updatedStudent) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.rollNo === rollNo ? updatedStudent : student
      )
    )
  }

  return (
    <>
      <StudentCard students={students} onUpdateStudent={updateStudent} />
    </>
  )

}

export default StudentList;