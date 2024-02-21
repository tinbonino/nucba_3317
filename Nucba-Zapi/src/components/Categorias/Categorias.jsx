// import { Categories } from "../../data/Categories";
import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";
import {useSelector} from "react-redux"
const Categorias = () => {

  const {categories} =useSelector((state)=>state.categories)

  return (
    <CategoriasContainer>
      {categories.map((category)=>(
        <Categoria key={category.id} {...category}/>
        ))
      };
      </CategoriasContainer>
  );
    }
export default Categorias;
