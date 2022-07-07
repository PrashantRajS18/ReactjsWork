import Pract4 from "./Pract4";
import { useState } from "react"

export default function Pract3(){
const[show,Setshow]= useState(true);    

    return(
        <>
            <button onClick={()=> Setshow(true)}>Show</button>
            <button onClick={()=> Setshow(false) }>Hide</button>
            {show && <Pract4/>} 
        </>
    )
}