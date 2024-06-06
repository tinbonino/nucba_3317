import React, { useEffect, useRef } from 'react';

import Hero from '../../components/Hero/Hero';

import { HomeWrapper } from './HomeStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <HomeWrapper>
      {/* Hero Section */}
      <Hero />
    </HomeWrapper>
  );
}

export default Home;
