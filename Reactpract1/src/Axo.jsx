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
            {api}
           {err}
           
        </div>
        <div>
          
        </div>
        {items.map(data =>{
                return<h1>{data.name} age is {data.age}</h1>
            })}
        <button onClick={()=> setrefresh(!refresh)}>New joke</button>
        <button onClick = {mock}>mock data</button>
        
        
        </>
    )
}
export default Axo;