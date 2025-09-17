
import React from 'react';
import students from './Students';

function App() {
  const calculateGrade = (marks) => {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    if (marks >= 60) return 'D';
    return 'F';
  };
  
  // can individually write each list tiem and diaply or use map / loops to make this shorter
  return (
    <div>
      <h1>Student List</h1>
      <br />
      <p>Below is the list of students with their marks and calculated grades:</p>
      <br />
      <ul>
          {students.map((student) => (
            <li key={students.key}>
                <pre>Name: {student.name}</pre>
                <pre>Roll Number: {student.rollNumber}</pre>
                <pre>Marks: {student.marks}</pre>
                <pre>Grade: {calculateGrade(student.marks)}</pre>
                <br />
           </li>
           
        ))}
        </ul>
    </div>
  );
}

export default App;