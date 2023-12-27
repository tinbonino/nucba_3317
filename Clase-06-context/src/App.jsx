import ThemeContext, {themes} from "./context";
import Navbar from "./componentes/Navbar";
import Body from "./componentes/Body";
import Layout from "./componentes/Layout";


import { useState } from "react";

function App(){

    const [tema,setTema] =useState(themes.claro);

    const handleCambioTema =()=>{
      tema=== themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro);
    };


    return (

      <div className="App">
        <ThemeContext.Provider value={{tema,handleCambioTema}}>
          <Layout>
              <Navbar/>
              <Body/>
          </Layout>
        </ThemeContext.Provider>


      </div>
    )
}

export default App;