import { Provider } from 'react-redux';
//import { store } from './app/store.js';
import AddTodo from './components/AddTodo.jsx';
import Todos from './components/Todos.jsx';

import FreshMart from './FreshMart.jsx';

import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import Timer from './Timer.jsx'
import DigitalClock from './DigitalClock.jsx'
import Stopwatch from './StopWatch.jsx'

const App = () => (
/*
  <>
  <Counter/>
  <ColorPicker/>
  <Timer/>
  <DigitalClock/>
  <DigitalClock/>
  <Stopwatch/>
  </>
  
 */

   <FreshMart/>
  

  /*
  <Provider store={store}>
    <div className="app">
      <h1> My ToDo Application </h1>
      <AddTodo />
      <h2>Todos</h2>
      <Todos />
    </div>
  </Provider>
  */
);

export default App;