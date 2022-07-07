import { useEffect } from "react"

export default function Pract4(){
    // const[count,setcount]= useState(0);
    

useEffect(()=>{
    console.log("Mount");
    return() =>{
console.log("unmount");
    }
},[]);
    return(<>
        <h1>Hello world</h1>
        
    </>)
}