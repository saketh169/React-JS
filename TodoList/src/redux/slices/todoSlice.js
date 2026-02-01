import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id:Date.now(),
                text: action.payload,
                completed: false,
                dueDate: null,
            });
        },
        updateTodo: (state, action) => {
            const todo = state.items.find((item) => item.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;    
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const todo = state.items.find((item) => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, updateTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
