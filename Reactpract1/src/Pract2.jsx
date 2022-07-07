import { useEffect, useState } from "react";

function Pract2(){
const[windowwith,Setwindowwith] = useState(window.innerWidth)

function handlewindow(){
    Setwindowwith(window.innerWidth);
}
useEffect(()=>{
    window.addEventListener('resize',handlewindow)
},[])
return(
    <>
      <div>{windowwith}</div>
    </>
)
}

export default Pract2