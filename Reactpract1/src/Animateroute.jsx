// import React from 'react'
// import {
   
//     Routes,
//     Route,
//     // Link,
//     useLocation
// } from 'react-router-dom';
// import Apicall from  './Apicall';
// import Axo from './Axo';
// import Form from './Form';
// import Menu from './Menu';
// import { AnimatePresence } from 'framer-motion';
// function AnimateRoute() {
//     const location = useLocation();
//   return (
//     <AnimatePresence>
// key method in components

//     <Routes location={location} key = {location.pathname}>
//     <Route  path='/' element={< Menu />}></Route>
//     <Route  path='/Apicall' element={< Apicall />}></Route>
//     <Route  path='/Axo' element={< Axo />}></Route>
//     <Route  path='/Form' element={< Form />}></Route>
//     </Routes>
//     </AnimatePresence>
//   )
// }

// export default AnimateRoute

import React from 'react'
import {
   
        // Routes,
        // Route,
        Link
        // useLocation
    } from 'react-router-dom';
function AnimateRoute() {
  return (
    <nav>
    <ul >
        <li>
            <Link to = "App">Home</Link>
        </li>
        <li>
        <Link to = "Form">Contact Form</Link>
           
        </li>
        <li>
            <Link to = "Axo">Jokes</Link>
        </li>
        <li>
        <Link to = "Apicall">User-Data</Link>
        </li>
    </ul>
 </nav>
  )
}

export default AnimateRoute