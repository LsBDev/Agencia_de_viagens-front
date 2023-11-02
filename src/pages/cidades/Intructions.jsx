import styled from "styled-components"
import Colors from "../../styles/Colors"

export default function Instruction({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 250px;
  padding: 20px;
  border: 1px solid ${Colors.primaryColor[1]};
  background: ${Colors.primaryColor[1]};
  opacity: 95%;
  p {    
    text-align: center;
    opacity: 100%;
  }
  @media (max-width: 780px) {
    min-width: 100%;
    height: 90px;
  }
`
