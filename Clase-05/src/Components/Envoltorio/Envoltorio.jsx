import styled from "styled-components"

const EnvoltorioGeneral = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #131415;
    color: whitesmoke;
`;


function Envoltorio({children}) {
  return (
    <EnvoltorioGeneral>{children}</EnvoltorioGeneral>
  )
}

export default Envoltorio