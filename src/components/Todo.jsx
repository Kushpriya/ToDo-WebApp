import React, { useState } from "react";
import "../assets/css/todo.css";

const Todo = () =>{
    const [value,setValue] = useState();
    const [todo,setTodo] = useState([]);
    const handleClick = () =>{
        if(value !== "" && todo !== ""){
            setTodo([...todo,value]);
            setValue('');
        }
    };
    return(
        <div>
             <h1>ToDo WebApp List</h1>
           <div className="head">
           {/* <input type="text" id="task" placeholder="Enter a new task"/> */}
                <input onChange={e => setValue(e.target.value)} value={value}
                id="task" placeholder="Enter a new task"/>
                <button onClick={handleClick}>Add</button>
           </div>
           
           <div>
            <ul>
                {todo.map((todos) =>(
                    <li>{todos}</li>
                ))}
            </ul>
           </div>
        </div>
    );
};
export default Todo;