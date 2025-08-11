import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice.jsx';
import styles from './Todos.module.css';

const Todos = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdate = (id, text) => {
    const newText = prompt('Update todo:', text);
    if (newText && newText.trim()) {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoItem}>
          <span
            className={todo.completed ? styles.completed : ''}
            onClick={() => handleUpdate(todo.id, todo.text)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => handleRemove(todo.id)}
            className={styles.deleteButton}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;