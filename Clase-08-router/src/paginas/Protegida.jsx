
import {Navigate} from "react-router-dom"
function Protegida({redirectTo,auth,children}) {
  return auth? children : <Navigate to={redirectTo}/>
}

export default Protegida