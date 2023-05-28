import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

export default function ResumeHosting() {
  const {selectHosting} = useContext(CityContext)
  const [hosting, setHosting] = useState()
  console.log(hosting)


  useEffect(() => {
    const url = `http://localhost:5000/accommodation/${selectHosting}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      console.log(res.data)
      // setHosting(res.data)
    })
    .catch((err) => console.log(err.message))
  }, [selectHosting])

  return (
    // <Container>
    //   {selectHosting}
    // </Container>
    <Container>
      <h1>Passagem de Hospedagem</h1>
      <Resume>
        {/* <p>Destino: {hosting.destination_city}</p>
        <p>Partida: {hosting.departure_city}</p>
        <p>Companhia: {hosting.company}</p>
        <p>Hora de partida: {hosting.departure_time}</p>
        <p>Hora de chegada: {hosting.arrival_time}</p>
        <p>Preço: {hosting.price}</p> */}
      </Resume>      
    <Link to="/hospedagens">Consultar hospedagens</Link>
    </Container>
  )
}

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   margin-top: 80px;
//   background: lightcoral;
// `
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