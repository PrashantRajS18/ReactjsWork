import { useEffect, useState } from "react"
import "./App.css";
import Spinner from "./Spinner";
import axios from "axios";

const Apicall = ()=>{
const [items,Setitems] = useState([]);
const [refresh,setrefresh] = useState(false);
const[err,seterr] = useState("")
// window.location.reload(false);
useEffect(()=>{
console.log("hello")

},[])
    useEffect(()=>{
getdata();
    },[refresh]);
function getdata(){
    fetch(`http://localhost:3001/contacts`)
    .then(response => response.json())
    .then(json => {
         
        Setitems(json)
        setrefresh(true) 
    })

    .catch(error => {
    console.log("there is error")
seterr("there is some error while loading")})

    .finally(()=>{
        console.log("success");
    })
}
    function deletUser(id){
       axios.delete(`http://localhost:3001/contacts/${id}`)
       .then((response)=>{
        getdata();
    })
    };
   function rfrsh() {
    window.location.reload(false);
   }
    return(
        <>
        
        <h1 className="center">Table of data collected by Api</h1>
        <table className="center">
            <tbody id = "table">
                <tr>
                    <th>Name</th>
                    <th>email </th>
                    <th>Mobile</th>
                    <th>Operation</th>
                    
                </tr>
                {refresh ? refresh: <Spinner />}
                {items.map((items)=>(
                    <tr key ={items.id}>
                        <td>{items.name}</td>
                        <td>{items.email} </td>
                        <td>{items.Mobile}</td>
                        <td><button onClick={()=>deletUser(items.id)}>Delete</button></td>
                        
                    </tr>
                ))}
                
            </tbody>
            
           </table>
           <div>
           <button onClick={()=> setrefresh(rfrsh)}>Refresh</button>
           </div>
         
           <h1>{err}</h1>
        </>
    )
}
export default Apicall;