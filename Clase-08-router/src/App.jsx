
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Blog from './paginas/Blog';
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';
import Protegida from './paginas/Protegida';
import { useState } from 'react';
function App() {
  let [auth,setAuth]= useState(false);
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout auth={auth} setAuth={setAuth}/>}>
              <Route index element={<Home/>} />
              <Route path='blog' element={<Blog/>}/>
              <Route path='productos' element={
                <Protegida auth={auth} redirectTo="*">
                  <Productos/>
                </Protegida>
              } />

              <Route path='*' element={<NoPage/>} />

          </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
