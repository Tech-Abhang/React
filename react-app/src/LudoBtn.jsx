import {useState} from "react" ; 
export default function LudoBtn(){
    let [moves,setMoves] = useState({blue : 0,red : 0,green : 0,yellow : 0})

    function updateBlue(){
        console.log(`move played ${moves.blue}`) 
        setMoves({...moves,blue : moves.blue +1})
    }
    
    return (
        <div>
            <h2>game begins</h2>

            <p>blue : {moves.blue}</p>
            <button onClick={updateBlue}>+1</button>
            <p>red : {moves.red}</p>
            <button>+1</button>
            <p>green : {moves.green}</p>
            <button>+1</button>
            <p>yellow : {moves.yellow}</p>
            <button>+1</button>
        </div>
    )
}