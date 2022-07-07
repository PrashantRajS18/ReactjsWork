import { useEffect, useState } from "react"
import "./App.css";
import Spinner from "./Spinner";
// import Axo from "./Axo";


const Apicall = ()=>{
const [items,Setitems] = useState([]);
const [refresh,setrefresh] = useState(false);
const[err,seterr] = useState("")
// window.location.reload(false);

    useEffect(()=>{
       const timer = setTimeout(()=>{
            fetch(`https://run.mocky.io/v3/6c81f135-7901-4d20-9bd2-297d04a7bbcd`)
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

        },1000)

        return () => clearTimeout(timer);

    },[refresh]);
   function rfrsh() {
    window.location.reload(false);
   }
    return(
        <>
        
        <div>
            <tbody id = "table">
                <tr>
                    <th>Name</th>
                    <th>Age </th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Expense</th>
                </tr>
                {refresh ? refresh: <Spinner />}
                {items.map((items)=>(
                    <tr key ={items.name}>
                        <td>{items.name}</td>
                        <td>{items.age} </td>
                        <td>{items.gender}</td>
                        <td>{items.salary}</td>
                        <td>{items.expense}</td>
                    </tr>
                ))}
                
            </tbody>
            
           </div>
           <div>
           <button onClick={()=> setrefresh(rfrsh)}>Refresh</button>
           </div>
         
           {/* <Axo/> */}
           <h1>{err}</h1>
        </>
    )
}
export default Apicall;