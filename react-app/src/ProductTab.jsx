import Product from "./Product.jsx"
import MsgBox from './MsgBox.jsx'

function ProductTab(){
    let styles = {
        display :"flex",
        flexWrap : "wrap",
        justifyContent : "space-evenly",
        alignItems : "center"
    }
    return(
    <div style={styles}>
        <Product title="logitech MX Master" idx={0} />
        <Product  title="Apple pencil" idx={1}/>
        <Product title="Zebronic" idx={2}/>
        <Product title="Petronics" idx={3}/>
    </div>
    )
}

export default ProductTab