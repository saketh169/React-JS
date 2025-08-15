import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={addHandler} className="mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
        className="border p-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2">Add</button>
    </form>
  );
}

export default AddTodo;