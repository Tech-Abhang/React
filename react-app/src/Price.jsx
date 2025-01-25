export default function Price({oldPrices,newPrices}){
    return (
        <div style ={{background : "#e0c367", height : "50px" , borderRadius : "0px 0px 10px 10px"}}>
            <span style={{textDecoration : "line-through"}}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={{fontWeight : 700}}>{newPrices}</span>
        </div>
    )
}