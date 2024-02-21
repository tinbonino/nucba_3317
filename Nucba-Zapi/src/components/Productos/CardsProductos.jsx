// import {Products} from "../../data/";
import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';
import {useSelector} from "react-redux"
import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';

const CardsProductos = () => {
  let products = useSelector((state)=> state.products.products)
  return (
    <>
      <ProductosContainer>
          {Object.entries(products).map(([,foods]) =>
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
