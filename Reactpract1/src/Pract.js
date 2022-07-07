import React, { useEffect, useState } from "react";
function Pract(){
    const[resource,Setresource] = useState('posts')
    const[items,Setitems]= useState([])
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            Setitems(json)})
    },[resource])
    return(
        <>
            <div>
                <button onClick={() => Setresource('posts')}>Posts</button>
                <button onClick={() => Setresource('Comments')}>Comments</button>
                <button onClick={() => Setresource('users')}>users</button>
                <h1>{resource}</h1>
                </div>
                {items.map(item =>{
                    return<h1>{item.body}{item.name} {item.username}</h1>
                })} 
        </>
    )
}
export default Pract;