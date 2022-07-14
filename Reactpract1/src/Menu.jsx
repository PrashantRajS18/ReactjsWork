import {
    BrowserRouter as Router,
    Routes,
    Route
    // Link
} from 'react-router-dom';
import './App.css';
import Apicall from  './Apicall';
import Axo from './Axo';
import Form from './Form';
import Animateroute from './Animateroute';
import App from './App';
const Menu = ()=>{
    return(
        <>
        <Router>
       <Animateroute/>
      <Routes>
        <Route  path='/App' element={< App />}></Route>
        <Route  path='/Apicall' element={< Apicall />}></Route>
        <Route  path='/Axo' element={< Axo />}></Route>
        <Route  path='/Form' element={< Form />}></Route>
        </Routes>
        </Router>
        </>
    )
}

export default Menu;