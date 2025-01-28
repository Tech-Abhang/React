import {useState} from "react";
import {random,sum} from "./helper.js"
import Ticket from "./ticketnum.jsx";

export default function Lottery(){
    let [ticket,setTicket] = useState(random(3))
    let isWining = sum(ticket) === 15;
    function buyTicket(){
        setTicket(random(3))
    }
    return(
        <div>
            <h1>Lottery Game !</h1>
            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        <button onClick={buyTicket}>New ticket</button>
        <h3>{isWining && "congo , you won" }</h3>
        </div>
    )
}