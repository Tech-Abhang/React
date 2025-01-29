import {useState} from "react"

export default function form(){
    let [formData , setFormData] = useState({
        username : "",
        remark : "",
        rating : 5,
    })

    let handleInputChange = (event) =>{
        setFormData((currData)=>{
            return {...currData , [event.target.name] : [event.target.value]}
        })
        
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData)
    }

    return (
        <form>
            <input placeholder="username" value={formData.username} onChange={handleInputChange} name="username"/>
            <br></br><br></br>
            <textarea placeholder="type a remark" value={formData.remark} onChange={handleInputChange} name="remark"></textarea>
            <br></br><br></br>
            <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating"/>
            <br></br><br></br>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}