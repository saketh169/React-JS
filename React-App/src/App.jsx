
/*
import FreshMart from './FreshMart.jsx';
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import Timer from './Timer.jsx'
import DigitalClock from './DigitalClock.jsx'
import Stopwatch from './StopWatch.jsx'

const App = () => (
  <>
  <Counter/>
  <ColorPicker/>
  <Timer/>
  <DigitalClock/>
  <DigitalClock/>
  <Stopwatch/>
  </>
  // <FreshMart/>
}
*/


/*
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import AddTodo from './components/AddTodo.jsx';
import Todos from './components/Todos.jsx';

function App() {
  <Provider store={store}>
    <div className="app">
      <h1> My ToDo Application </h1>
      <AddTodo />
      <h2>Todos</h2>
      <Todos />
    </div>
  </Provider>
  
);}
*/


/* 
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'; 
import React from 'react';
import students from './Students';

function App() {
  
  // can individually write each list tiem and diaply or use map / loops to make this shorter
  return (
    <Provider store={store}>
      <div className="p-4">
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  
  );
} 
*/


/*
import Greet from './Greet'
import React from 'react'

function App () {
  return (
    <>
      <Greet />
    </>
  )
}
export default App;
*/


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

