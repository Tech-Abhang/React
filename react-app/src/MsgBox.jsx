function MsgBox({name,textColor}){
    let styles = {color : textColor}
    return (
        <h1 style={styles}>{name}</h1>
    )
}

export default MsgBox;