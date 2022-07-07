import { useEffect, useState } from 'react';
import Contextapp from './Contextapp';
import Prc from './Prc';
import Child from './Chlid';
import Resize from './Resize';


function App() {
const[state ,setstate] = useState(0);
const[disabled,setdisabled] = useState(false);

const obj ={
  firstname: 'Prashant',
  lastname: 'pandey'
};


function inc(){
  
  setdisabled(true);
  setTimeout(()=>{
    setstate(prev=>prev+1);
    setdisabled(false);
  },500)
}
useEffect(()=>{

//  let timer = setTimeout(()=>{
//     console.log("clicked");
//   },3000)
//   return () => clearTimeout(timer);

},[state])
  return (
<>
<Contextapp.Provider value={{obj,state}}>
  <Prc/>
  <Child/>
</Contextapp.Provider>
  <button onClick={inc} disabled = {disabled}>click</button>
  <Resize/>
</>
  );
}

export default App;
