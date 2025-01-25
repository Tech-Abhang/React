import "./Product.css"
import Price from "./price.jsx"

function Product({title,idx}){
    let oldPrices = ["12,495","11,900","999","987"]
    let newPrices = ["12,000","10,900","699","587"]
    let description = [
        "8000 DPT",
        "intutive surface",
        "for ipad",
        "wireless"
    ]
    return (
        <div className = "Product" >
            <h1>{title}</h1>
            <p>{description[idx]}</p>
            <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
        </div>
    )
}

export default Product