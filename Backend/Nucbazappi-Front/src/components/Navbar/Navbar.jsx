import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa';

import ModalUser from './ModalUser/ModalUser';

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
} from './NavbarStyles';
import { toggleMenuHidden } from '../../redux/user/userSlice';
import { ADMIN } from '../../utils';

function Navbar() {
  const currentUser = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log({ currentUser });

  return (
    <NavbarContainerStyled>
      <ModalUser />
      <div>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png'
            alt='Logo'
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          {currentUser?.rol === ADMIN ? (
            <Link to='/issue'>Crear Issue</Link>
          ) : (
            <span>No podes crear un Issue</span>
          )}
        </motion.div>

        <UserNavStyled>
          <UserContainerStyled
            onClick={() =>
              currentUser ? dispatch(toggleMenuHidden()) : navigate('/register')
            }
          >
            <SpanStyled>
              {currentUser ? `${currentUser.nombre}` : 'Inicia sesión'}
            </SpanStyled>
            <FaUserAlt />
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
