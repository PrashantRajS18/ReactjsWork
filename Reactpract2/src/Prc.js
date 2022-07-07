import { useContext } from "react"
import Contextapp from "./Contextapp"
function Prc(){
  const cont = useContext(Contextapp)
    return(
        <>
            <h2>{cont.state}</h2>
            
        </>
    )
}
export default Prc;