import { useEffect, useState } from "react";

export default function Pract5(){
    const[count,setcount]= useState(0);
    const[calculate,setcalculate] = useState(0);

    useEffect(()=>{
        setcalculate(()=> count * 2);
    },[count]);

    return(
        <>
        <p>count :{count}</p>
        <button onClick={()=>setcount((c) => c+1)}>+</button>
        <p>calculate : {calculate}</p>


        </>
    )
}