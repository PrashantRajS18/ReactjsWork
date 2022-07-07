import { useContext } from "react"
import Contextapp from "./Contextapp";
// import App from "./src/App";

function Child(){
    const cont = useContext(Contextapp)
    return(
        <>
            <p>{cont.obj.firstname +" "+ cont.obj.lastname } number is {cont.state}</p>
        </>
    )
}
export default Child