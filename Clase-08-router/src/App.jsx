
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Blog from './paginas/Blog';
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='blog' element={<Blog/>}/>
              <Route path='productos' element={<Productos/>} />
              <Route path='*' element={<NoPage/>} />
          </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
