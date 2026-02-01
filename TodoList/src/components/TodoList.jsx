import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, toggleComplete } from '../redux/slices/todoSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodo({ id, text }));
    setEditingId(null);
    setEditingText('');
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todo-container chat-layout">
      <div className="todo-header">
        <h2 className="todo-title">Your Todo List</h2>
      </div>
      
      <div className="todo-content">
        <ul className="todo-list chat-messages">
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item chat-message ${todo.completed ? 'completed message-completed' : ''}`}>
              {editingId === todo.id ? (
                <div className="message-edit-container">
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="edit-input message-input"
                  />
                  <div className="message-actions edit-actions">
                    <button onClick={() => handleUpdateTodo(todo.id, editingText)} className="btn-save action-btn save-btn">Save</button>
                    <button onClick={() => setEditingId(null)} className="btn-complete action-btn cancel-btn">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="message-body">
                  <span className="todo-text message-text">{todo.text}</span>
                  <div className="message-actions todo-actions">
                    <button onClick={() => handleToggleComplete(todo.id)} className="btn-complete action-btn complete-btn">
                      {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(todo.id);
                        setEditingText(todo.text);
                      }}
                      className="btn-edit action-btn edit-btn"
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDeleteTodo(todo.id)} className="btn-delete action-btn delete-btn">Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="input-area chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input chat-input"
        />
        <button onClick={handleAddTodo} className="add-btn send-btn">Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;