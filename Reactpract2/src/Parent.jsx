import { useCallback, useState } from "react"
import Child2 from "./Child2";

const Parent = ()=>{
const[counterone,setcounterone] = useState(0);
const[countertwo,setcountertwo] = useState(0);
const Inc = ()=>{
    setcounterone(prev => prev+1);
}
const fun = useCallback(()=>{
    console.log("hello");
},[countertwo]);

    return(
        <>
        
        <button onClick = {Inc}>Counterone - {counterone}</button>
        <Child2  countertwo = {countertwo} fun = {fun} setcountertwo = {setcountertwo}/>


        </>
    )
}
export default Parent;