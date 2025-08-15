import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
    }
  };

  return (
    <div className="mt-4">
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center mt-2">
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-1"
                />
                <button onClick={() => saveEdit(todo.id)} className="ml-2 bg-green-500 text-white p-1">Save</button>
              </>
            ) : (
              <>
                <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
                <button onClick={() => startEdit(todo.id, todo.text)} className="ml-2 bg-yellow-500 text-white p-1">Edit</button>
              </>
            )}
            <button onClick={() => dispatch(toggleTodo(todo.id))} className="ml-2 bg-purple-500 text-white p-1">
              {todo.completed ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="ml-2 bg-red-500 text-white p-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;