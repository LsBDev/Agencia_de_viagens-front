import { useContext } from "react"
import CityContext from "../../context/city.context"
import styled from "styled-components"
import poltrona from "../../assets/Poltronas.jpeg"
import hotel from "../../assets/Hotel.png"
import { Link } from "react-router-dom"
import Colors from "../../styles/Colors"

export default function ResumeTicket() {
  const {flight, selectCity} = useContext(CityContext)

  return (
    <Container>
      <h1>Passagem para a {flight.destination_city}</h1>
      <Resume>
        <img src={poltrona} alt="poltronas de avião"/>
        <p>Destino: {flight.destination_city}</p>
        <p>Partida: {flight.departure_city}</p>
        <p>Companhia: {flight.company}</p>
        <p>Hora de partida: {flight.departure_time}</p>
        <p>Hora de chegada: {flight.arrival_time}</p>
        <p>Preço: R$ {flight.price},00</p>
      </Resume>      
    {/* <Link to="/hospedagens">Consultar hospedagens</Link> */}
      {selectCity ? <Link to="/hospedagens">Consultar Hotéis</Link> : <></>}
      <img src={hotel} alt="hotelzinho" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  padding: 60px;
  background: ${Colors.primaryColor[1]};
  color: hsl(17.355371900826448, 100%, 52.54901960784314%);
  h1 {
    font-size: 40px;
    margin: 50px;
  }
  a {
    font-size: 30px;
    text-decoration: none;
  }
`
const Resume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* height: 300px; */
  padding: 25px;
  background: ${Colors.white[1]};
  box-shadow: 3px 3px 2px ${Colors.black[4]};
  img {
    width: 400px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    color: ${Colors.secondaryColor};
  }
`