function submit(event){
    event.preventDefault();
    console.log("form is suubmitted")
}

export default function(){
    return (
        <div>
            <form>
                <input placeholder="type something"/>
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}