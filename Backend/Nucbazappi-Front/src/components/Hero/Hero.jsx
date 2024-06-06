import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';

import Button from '../UI/Button/Button';

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';
import { useNavigate } from 'react-router-dom';

const Hero = ({ doScroll }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <HeroContainerStyled>
      <div>
        {currentUser?.verified ? (
          <h1 className='title'>Bienvenido Usuario Verificado</h1>
        ) : (
          <div>
            <h1 className='title'>Tenes que validar tu cuenta</h1>
            <HeroFormStyled>
              <Button
                onClick={() => {
                  navigate('/validate');
                }}
                radius='10'
              >
                Validar usuario
              </Button>
            </HeroFormStyled>
          </div>
        )}
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
