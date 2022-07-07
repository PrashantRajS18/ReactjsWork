import { useState } from "react"

function Inc(props){
    const [color, setColor] = useState("#fff");
    function f(){
        props.incNum();
        setColor("#5ab13c");
    
        // props.decNum();
        // setColor("red")

    }
   
    
    return(<button onClick={() => {f();}} style={{background: color}} >Increment</button>)
}

export default Inc