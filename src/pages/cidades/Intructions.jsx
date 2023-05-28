import styled from "styled-components"

export default function Instruction({text}) {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 50%; */
  height: 100%;
  max-width: 250px;
  /* max-height: 200px; */
  padding: 20px;
  border: 1px solid #ff530d;
  border-radius: 10px;
  background: #ff530d;
  opacity: 95%;
  p {
    font-size: 25px;
    font-family: 'Roboto';
    text-align: center;
    font-style: italic;
    opacity: 100%;
  }
`
