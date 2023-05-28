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
  width: 250px;
  height: 200px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background: lightcoral;
  p {
    font-size: 20px;
    text-align: center;
  }
`
