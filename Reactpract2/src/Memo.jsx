import { useState , useMemo } from "react";

function Memo(){
    const[counterone,setcounterone] = useState(0);
    const[countertwo,setcountertwo] = useState(0);
    
    const incrementone = ()=>{
        setcounterone(prev=>prev+1);

    }
    const incrementwo = ()=>{
        setcountertwo(prev=>prev+1);
    }
    const isEven= useMemo ( ()=>{
        console.warn("hello")
        let i=0;
        while(i<2000000000)i++;
        return counterone%2 === 0
    },[counterone])
    const clear =()=>{
        setcounterone(0);
        setcountertwo(0);
    }

    return(
        <>
        <button onClick={incrementone}>Counter +{counterone}</button>
        <div>{isEven ? "even":"odd"}</div>
        <button onClick={incrementwo}>Counter + {countertwo}</button>
        <div>
        <button onClick={clear}>Clear</button>
        </div>
        </>
    )
}

export default Memo;