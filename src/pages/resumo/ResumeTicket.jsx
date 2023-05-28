import { useContext } from "react"
import CityContext from "../../context/city.context"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function ResumeTicket() {
  const {flight} = useContext(CityContext)
  console.log(flight)

  return (
    <Container>
      <h1>Passagem para a CIDADE</h1>
      <Resume>
        <p>Destino: {flight.destination_city}</p>
        <p>Partida: {flight.departure_city}</p>
        <p>Companhia: {flight.company}</p>
        <p>Hora de partida: {flight.departure_time}</p>
        <p>Hora de chegada: {flight.arrival_time}</p>
        <p>Preço: {flight.price}</p>
      </Resume>      
    <Link to="/hospedagens">Consultar hospedagens</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 80px;
  padding: 100px;
  background: lightblue;
  h1 {
    font-size: 40px;
    font-weight: bold;
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
  justify-content: flex-start;
  padding: 100px;
  background: lightcoral;
  p {
    width: 100%;
    text-align: start;
    font-size: 30px;
    font-weight: 300;
  }
`