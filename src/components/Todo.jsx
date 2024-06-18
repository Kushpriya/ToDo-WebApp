import React from "react";
import "../assets/css/todo.css";
const Todo = () =>{
    return(
        <div>
             <h1>ToDo WebApp List</h1>
            <input type="text" id="task" placeholder="Enter a new task"></input>
            <button>Add</button>
        </div>
    );
};
export default Todo;