// import React, { useState } from "react";
// import "../assets/css/todo.css";

// const Todo = () =>{
//     const [value,setValue] = useState();
//     const [todo,setTodo] = useState([]);
//     const handleClick = () =>{
//         if(value !== "" && todo !== ""){
//             setTodo([...todo,value]);
//             setValue('');
//         }
//     };

//     // const handleEdit = () => {
//     //     if ()
//     // };

//     // const handleDelete =() =>{
//     //     setValue(value.filter(value => ))
//     // }

//     return(
//         <div>
//              <h1>ToDo WebApp List</h1>
//            <div className="head">
//            {/* <input type="text" id="task" placeholder="Enter a new task"/> */}
//                 <input onChange={e => setValue(e.target.value)} value={value}
//                 id="task" placeholder="Enter a new task"/>
//                 <button className="add" onClick={handleClick}>Add</button>
//            </div>
           
//            <div>
//             <ol className="list">
//                 <div>
//                     {todo.map((todos) =>(
//                         <li>{todos}</li>
//                     ))}
//                 </div>

//                 <div>
//                     <button className="edit">Edit</button>
//                     <button className="del">Delete</button>
//                 </div>
                
//             </ol>
            
//            </div>

            
//             {/* <button onClick={handleEdit}>Edit</button> */}
//             {/* <button onClick={handleDelete}>Delete</button> */}
//         </div>
//     );
// };
// export default Todo;

import React, { useState } from "react";
import "../assets/css/todo.css";

const Todo = () => {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = () => {
        if (value !== "") {
            setTodo([...todo, value]);
            setValue("");
        }
    };

    const handleDelete = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    const handleEditInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleEditClick = (index) => {
        setIsEditing(true);
        setCurrentIndex(index);
        setValue(todo[index]);
    };

    const handleUpdateClick = () => {
        const updatedTodo = todo.map((item, index) =>
            index === currentIndex ? value : item
        );
        setTodo(updatedTodo);
        setIsEditing(false);
        setValue("");
        setCurrentIndex(null);
    };

    return (
        <div className="todo-container">
            <h1>ToDo WebApp List</h1>
            <div className="head">
                <input onChange={handleEditInputChange}
                    value={value}
                    id="task"
                    placeholder="Enter a new task"
                />
                {isEditing ? (
                    <button className="update" onClick={handleUpdateClick}>
                        Update
                    </button>
                ) : (
                    <button className="add" onClick={handleClick}>
                        Add
                    </button>
                )}
            </div>
            <div>
                <ol className="display">
                    {todo.map((task, index) => (
                        <li key={index}>{task}
                            <div className="btn">
                                <button className="edit" onClick={() => handleEditClick(index)}>Edit</button>
                                <button className="del" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Todo;
