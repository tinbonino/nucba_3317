import CardRecomendacion from "./CardRecomendacion";
import { recommended } from "../../data";
import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {recommended.map((recomendado)=>(
        <CardRecomendacion key={recomendado.key} {...recomendado}/>
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
