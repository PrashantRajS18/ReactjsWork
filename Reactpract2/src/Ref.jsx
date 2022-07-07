import { useEffect, useRef, useState } from "react"
import Input from "./Input";

const Ref = ()=>{
const[name,setname] = useState(' ');
const rendercount = useRef(1);
const inputref = useRef();

function focus(){
    inputref.current.focus();
}

useEffect(()=>{
    rendercount.current = rendercount.current+1;
})

    return(
        <>
            <Input ref={inputref} value={name}  onChange = {e => setname(e.target.value)}/>
            <h1>My name is {name}</h1>
            <div>comp render{rendercount.current}</div>
            <button onClick={focus}>Focus</button>
        </> 
    )
}
export default Ref