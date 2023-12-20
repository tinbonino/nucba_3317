// import Boton from "../UI/Boton"

import { HeroContainerStyled, HeroTextContainerStyled,HeroImageContainerStyled } from "./HeroStyles"


function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Si tenes Zappi,</h1>
        <h2>tenes Nucba.</h2>
        <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png" alt="" />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero