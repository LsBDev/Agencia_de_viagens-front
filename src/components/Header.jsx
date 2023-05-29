import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "./../assets/Logo2.png"


export default function Header() {
  return (
    <Top>      
      <Link to="/"><img src={Logo} alt="Logo" /></Link>
      <Link to="/hospedagens">Consultar hospedagens</Link>
    </Top>
  )
}

const Top = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 4;
  padding: 5px 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 120px;
  }
`