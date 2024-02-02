import Edad from "./Edad"
import { Outlet, Link } from "react-router-dom"
function Layout({auth,setAuth}) {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="blog">Blog</Link>
                </li>
                <li>
                    <Link to="productos">Productos</Link>
                </li>
                <li>
                    <Edad auth={auth} setAuth={setAuth}/>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout