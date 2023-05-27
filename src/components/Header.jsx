import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Header() {
  return (
    <Top>
      <p>Viagens Alucinantes</p>
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
  /* fixar a barra no topo - w100% - depois descer o conteúdo do main o mesmo tamanho da barra */
  padding: 20px;
  border: 1px solid black;
  p {
    font-size: 30px;
    font-weight: 400;
  }

`