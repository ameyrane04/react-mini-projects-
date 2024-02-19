import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { // ye apne store ka initial state
    todos: [{id: 1, text: "Yo"}]
}

export const todoSlice = createSlice({
    name: "Amey's todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((eachTodo)=> eachTodo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((eachTodo)=> eachTodo.id === action.payload ? todo : eachTodo ) 
        }
    }
})

export const {addTodo,removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer