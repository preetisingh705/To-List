import { useState } from "react";
import { v4 as uuidv4 } from 'uuid' ;
import './To.css';
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import wr from "./writing.png";



export default function To() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone:false },
]);
    let [newTodo, setNewTodo] = useState("");



    let addNewTask = () => {
        setTodos((prevTodo) => {
    return [...prevTodo, {task: newTodo, id: uuidv4(), isDone:false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
     //console.log(event.target);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
    };

    let markAsDoneAll = () => {
        setTodos( (prevTodos) => 
            prevTodos.map((todo) => {
                    return {
                        ...todo,
                        isDone: true,
                    };
              })
              );
    };

    let markAsDone = (id) => {
        setTodos( (prevTodos) => 
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
              })
              );
    }; 

    let lowerCaseOne = (id) => {
        setTodos( (todos) => 
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task : todo.task.toLowerCase(),
                    };
                } else {
                    return todo;
                }
              })
        );
    };


    return (
    
        <div className="main">
            <h3 className="text">ToDo List</h3>
            <div class="head">
                <h3 class="heading">Write Your Note.!&nbsp; <img src={wr} width={50} height={50}/></h3>
            </div>

            <div id="wrapper">
                <input  placeholder="Add your task"  value={newTodo} 
            onChange={updateTodoValue} ></input>
                <button onClick={addNewTask} className="add">Add</button>
            </div>
          

             <div id="tasks">
             <ul>
                {todos.map( (todo) => (
                    <li key={todo.id}>
                    <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                        {todo.task}
                    </span>
                    <button className="delete" onClick= { () =>deleteTodo(todo.id)}><MdDelete size={25}/></button> &nbsp;
                    <button className="done" onClick= { () =>markAsDone(todo.id)}><IoCheckmarkDoneCircleSharp size={25}/></button>

                    </li>
                ))}
            </ul>
                
            </div>

           
            <br /><br />
            <button onClick={markAsDoneAll} className="mark">All Done <IoCheckmarkDoneCircleSharp size={20}/></button>
        </div>
    );
}