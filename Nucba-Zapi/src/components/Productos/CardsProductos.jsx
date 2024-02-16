import {Products} from "../../data/";
import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';

const CardsProductos = () => {
  console.log(Object.entries(Products));
  console.log(Products);
  return (
    <>
      <ProductosContainer>
          {Object.entries(Products).map(([,foods]) =>
          foods.map((food)=><CardProducto key={food.id} {...food} />)
          )}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={e => e.preventDefault()}
          secondary='true'
          disabled='true'
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={e => e.preventDefault()} disabled='true'>
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
