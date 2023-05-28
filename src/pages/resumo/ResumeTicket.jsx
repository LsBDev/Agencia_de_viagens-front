import { useContext } from "react"
import CityContext from "../../context/city.context"
import styled from "styled-components"
// import { Link } from "react-router-dom"

export default function ResumeTicket() {
  const {flight} = useContext(CityContext)
  console.log(flight)

  return (
    <Container>
      <h1>Passagem para a {flight.destination_city}</h1>
      <Resume>
        <p>Destino: {flight.destination_city}</p>
        <p>Partida: {flight.departure_city}</p>
        <p>Companhia: {flight.company}</p>
        <p>Hora de partida: {flight.departure_time}</p>
        <p>Hora de chegada: {flight.arrival_time}</p>
        <p>Preço: {flight.price}</p>
      </Resume>      
    {/* <Link to="/hospedagens">Consultar hospedagens</Link> */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 80px;
  padding: 100px;
  background:  #ff520de8;
  h1 {
    font-size: 40px;
    font-family: 'roboto';
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
  border-radius: 10px;
  background: #946a5a;
  p {
    width: 100%;
    font-family: 'Roboto';
    line-height: 50px;
    text-align: start;
    font-size: 30px;
    font-weight: 300;
  }
`