import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [ // created a context, then uske andar todos ek property hai jiske andar objects hai
        {   //ye objects and uske elements kahi se bhi access kar sakte hai
            id: 1,
            todo: "task 1",
            completed: false
        }
    ],
    addTodo : (todo)=>{}, //functions define kardiye jo jo use honge
    updateTodo: (id,todo)=>{}, //inko kahi par bhi define kar sakte hai jaha use honge
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
});

export const useTodo = ()=>{ //custom hook bana diya apna context ka useTodo
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;  //provider ko export kardiya jo wrapper tag banega app.js me so that this context file can be used 