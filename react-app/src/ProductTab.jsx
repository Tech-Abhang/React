import Product from "./Product.jsx"

function ProductTab(){
    return(
    <>
        <Product title ="laptop" price={100000}/>
        <Product title="phone"price={100000}/>
        <Product title="pen"/>
    </>
    )
}

export default ProductTab