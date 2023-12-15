
import './App.css';
import Hijo from './Hijo';



function Padre() {
  return (
    <div className="Padre">
      <Hijo nombre="Pedro"/>
      <Hijo nombre="Juan"/>
      <Hijo nombre="Carlos"/>
      
    </div>
  );
}
export default Padre;
