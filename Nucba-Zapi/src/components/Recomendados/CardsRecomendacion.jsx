import CardRecomendacion from "./CardRecomendacion";
import { CardsContainer } from "./CardsRecomendacionStyled";
import {useSelector} from "react-redux"

const CardsRecomendacion = () => {
  const {recommended} = useSelector((state)=>state.recommeded)
  return (
    <CardsContainer gridLength={4}>
      {recommended.map((recomendado)=>(
        <CardRecomendacion key={recomendado.key} {...recomendado}/>
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
