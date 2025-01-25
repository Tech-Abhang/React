function dosomething(){
    console.log("click")
}


export default function button() {
    return ( 
    <div>
        <button onClick={dosomething}>Click me!</button>
    </div>
    )
}