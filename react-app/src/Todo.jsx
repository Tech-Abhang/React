import {useState}  from "react"
export default function(){
    let [todos , setTodos] = useState(["sample Task"])
    let [newTodo, setNewTodo] = useState([""])

    function addNewTask(){
        console.log("new task added")
        setTodos([...todos,newTodo])
    }

    function updateTodo(event){
        setNewTodo(event.target.value)
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
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}