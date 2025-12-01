import StudentDetails from './StudentDetails'

function StudentCard({ students, onUpdateStudent }) {

   // update feedback by calling parent's update handler so it becomes part of app state
   const updateFeedback = (student) => {
      const updated = { ...student, feedback: 'feedback needs to be updated' }
      onUpdateStudent(student.rollNo, updated)
      console.log('feedback updated for', student.rollNo)
   }
    
    return (
        <div >
            <h1>Student List - {students.length} Students</h1>
            <ul className="student-list">
                {students.map(student => (
                    <li key={student.rollNo} className="student-item">
                        <div className="student-card">
                        <StudentDetails 
                          student={student} 
                          onUpdateStudent={onUpdateStudent} 
                        />
                        <button className="feedback-button" 
                            onClick={(e) => {
                            updateFeedback(student);
                            e.target.innerText = 'Feedback is Updated';}}  >
                          Give Feedback
                        </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentCard