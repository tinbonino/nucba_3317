import { StyledContainer, PHeredado, StyledButton, StyledH4,StyledP} from "./EjemploStyled"

function EjemploStyled() {
  return (
    <StyledContainer>
        <StyledH4>Soy un h4 con styled components</StyledH4>
        <StyledP>Soy un párrafo con Styled Components</StyledP>
        <h3>Soy un h3 simple y sencillo</h3>
        <PHeredado>Soy un párrafo heredado</PHeredado>
        <StyledButton>Soy un boton con styled components</StyledButton>
        <StyledButton color width={"550px"}>Soy un boton con props</StyledButton>
    </StyledContainer>
  )
}

export default EjemploStyled