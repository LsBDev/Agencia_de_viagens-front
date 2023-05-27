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
      <p>{flight.destination_city}</p>
      <p>{flight.departure_city}</p>
      <p>{flight.company}</p>
      <p>{flight.departure_time}</p>
      <p>{flight.arrival_time}</p>
      <p>{flight.price}</p>
    <Link to="/hospedagens">Consultar hospedagens</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  background: lightblue;
  height: 300px;
`