import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleMenuHidden,
} from "../../../redux/user/userSlice";
import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Hola ${currentUser?.nombre}!!`}</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleMenuHidden());
            }}
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
