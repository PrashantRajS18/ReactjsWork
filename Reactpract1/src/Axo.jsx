import {useState ,useEffect} from "react";
import axios from "axios";


const Axo = ()=>{
 const[api,setapi] = useState("");
 const [refresh,setrefresh] = useState(false);
 const[items,Setitems]= useState([])
 const[err,seterr] = useState("")

 const mock = ()=>{ 
    axios.get("https://run.mocky.io/v3/db651afd-6a8d-41f0-9efc-cba9d912c339")
    .then((response)=>{
        // console.log(response)
        Setitems(response.data)
    })
 }
 const getdata = ()=>{
    axios.get("http://api.icndb.com/jokes/random")
    .then((response) => {
        // console.log(response)
        
        setapi( response.data.value.joke);
    }
    
    )
    .catch(error =>{
        seterr("Sorry No joke")
    })
};

useEffect(()=>{
    getdata()
    
},[refresh])

    return(
        <>
        <div>
           <h1>hello the Most bad jokes you find here</h1> 
          <h1>{api}</h1> 
           {err}
           
        </div>
        <div>
          
        </div>
        
            <div>
            <button onClick={()=> setrefresh(!refresh)}>New joke</button>
            </div>
            <div>
            <h1>The Mocky Api data</h1>
            {items.map(data =>{
                return<h1>{data.name} age is {data.age}</h1>
            })}
        <button onClick = {mock}>mock data</button>
            </div>
        
        
        
        </>
    )
}
export default Axo;