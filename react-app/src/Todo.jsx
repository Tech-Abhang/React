import {useState}  from "react"
import {v4 as uuidv4 } from "uuid";

export default function(){
    let [todos , setTodos] = useState([{task :"sample-task",id: uuidv4(),isDone:false}])
    let [newTodo, setNewTodo] = useState([""])

    function addNewTask(){
        console.log("new task added")
        setTodos([...todos,{task: newTodo , id:uuidv4() , isDone : false}])
    }

    function updateTodo(event){
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) =>{
        console.log(id);
        //show only filtered/selected tasks
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); 
    }

    let upperCase = () =>{
        setTodos(todos.map((todo)=> {
            return {...todo,task:todo.task.toUpperCase()};
        }))
    }

    let updateOneTodo = (id) =>{
        setTodos(todos.map((todo)=> {
            if(todo.id == id){
                return {...todo, isDone : true};
            }else{
                return {...todo};
            }
        }))
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
                            <span style={todo.isDone ? {textDecoration :"line-through"}:{textDecoration :"none"}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => updateOneTodo(todo.id)}>update</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCase}>All UpperCase</button>
        </div>
        )
}