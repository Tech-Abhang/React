import {useState}  from "react"
import {v4 as uuidv4 } from "uuid";

export default function(){
    let [todos , setTodos] = useState([{task :"sample-task",id: uuidv4()}])
    let [newTodo, setNewTodo] = useState([""])

    function addNewTask(){
        console.log("new task added")
        setTodos([...todos,{task: newTodo , id:uuidv4()}])
    }

    function updateTodo(event){
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) =>{
        console.log(id);
        //show only filtered/selected tasks
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); 
    }


    return (
        <div>
            <input placeholder = "add task" value={newTodo} onChange={updateTodo}></input>
            <button onClick={addNewTask}>add</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h3>Todo</h3>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}