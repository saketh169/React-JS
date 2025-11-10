// App.js (Redux Toolkit Demo)
import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: state => { state.count += 1; },
    // ADDED: Decrement action to decrease counter
    decrement: state => { state.count -= 1; },
    // ADDED: Reset action to set counter back to 0
    reset: state => { state.count = 0; },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

const ChildA = React.memo(() => {
  const count = useSelector(state => state.counter.count);
  console.log("Child A re-rendered");
  return <p>Child A Count: {count}</p>;
});

const ChildB = React.memo(() => {
  const dispatch = useDispatch();
  console.log("Child B re-rendered");
  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        Increment
      </button>
      {/* ADDED: Decrement button */}
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        Decrement
      </button>
    </div>
  );
});

// ADDED: Main component with timer and background color logic (must be inside Provider)
const MainContent = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  // ADDED: Auto-reset timer - resets counter to 0 after 10 seconds of inactivity
  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(counterSlice.actions.reset());
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [count, dispatch]);

  // ADDED: Dynamic background color based on counter value
  const backgroundColor = count > 0 ? 'lightgreen' : 'lightcoral';

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      <h2>Redux Toolkit Demo</h2>
      <ChildA />
      <ChildB />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}

export default App;
