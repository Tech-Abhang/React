function dosomething(){
    console.log("click")
}
function bye(){
    console.log("bye")
}

export default function button() {
    return ( 
    <div>
        <button onClick={dosomething}>Click me!</button>
        <p onMouseOver={bye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt, pariatur sequi tempora aut nostrum sit libero! Temporibus, quibusdam! Praesentium ipsum aperiam eos voluptatum dolorem. Rerum eum facilis cupiditate dolorum.</p>
    </div>
    )
}