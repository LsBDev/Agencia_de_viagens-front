import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Header() {
  return (
    <Top>
      <h1>Viagens Alucinantes</h1>
      <Link to="/">Voltar</Link>
    </Top>
  )
}

const Top = styled.header`
  width: 100%;
  top: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-size: 30px;
    font-weight: 400;
    font-weight: bolder;
  }
`