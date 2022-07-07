import { useEffect } from "react";
const Child = ({countertwo,setcountertwo,fun})=>{
    console.log("child 2 runs");
    useEffect(()=>{
        console.log("Inside useEffect");
    },[fun])
    return(
        <>
            <h1>Child component of parent</h1>
            <button onClick={() => setcountertwo(prev => prev+1)}>Inc + {countertwo}</button>
        </>
    )
}

export default (Child);