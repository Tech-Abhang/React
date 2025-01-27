import { useState } from "react"

export default function LikeButton(){
    let [isLiked , setLiked] = useState(false);
    let [count , setCount] = useState(0)

    let likeStyle = {color : "red"}


    function toggle(){
        setLiked(!isLiked)
        setCount(count+1)
    }

    return (
        <div>
            <p onClick={toggle}>
                {count},
                {isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i class="fa-regular fa-heart"></i> }
            </p>
        </div>
    )
}