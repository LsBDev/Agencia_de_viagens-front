import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "./../assets/Logo2.png"
import { useContext } from "react"
import CityContext from "../context/city.context"
import Colors from "../styles/Colors"


export default function Header() {
  const {city, setSelectCity} = useContext(CityContext)
  return (
    <Top>      
      <Link to="/" onClick={() => setSelectCity(1)}><img src={Logo} alt="Logo" /></Link>
      {/* ou botão de voltar pg ?? */}
      {city ? <Link to="/" onClick={() => setSelectCity(1)}>Página Inicial</Link> : <></>} 
    </Top>
  )
}

const Top = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  background: ${Colors.white[1]};
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 4;
  padding: 5px 50px;
  box-shadow: 0px 4px 4px ${Colors.black[4]};
  img {
    width: 140px;
  }
`