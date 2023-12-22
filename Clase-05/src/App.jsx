
import EjemploUseState from './Components/EjemploUseState/EjemploUseState'
import Envoltorio from './Components/Envoltorio/Envoltorio'
import EjemploUseRef from './Components/EjemploUseRef/EjemploUseRef'
import EjemploOnChange from './Components/EjemploOnChange/EjemploOnChange'
import EjemploOnSubmit from './Components/EjemploOnSubmit/EjemploOnSubmit'
import EjemploUseEffect from './Components/EjemploUseEffect/EjemploUseEffect'
function App() {
 

  return (
    <Envoltorio>
      <h1>Aca estamos aprendiendo</h1>
      <EjemploUseState/>
      <EjemploUseRef/>
      <EjemploOnChange/>
      {/* <EjemploOnSubmit/> */}
      <EjemploUseEffect/>

      </Envoltorio>
  )
}

export default App
