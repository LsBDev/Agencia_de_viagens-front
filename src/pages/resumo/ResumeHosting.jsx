import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

export default function ResumeHosting() {
  const {selectHosting} = useContext(CityContext)
  const [hosting, setHosting] = useState([])
  console.log(hosting)


  useEffect(() => {
    const url = `http://localhost:5000/accommodation/${selectHosting}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      setHosting(res.data)
    })
    .catch((err) => console.log(err.message))
  }, [selectHosting])

  if (!hosting[0]) {
    return(console.log("Loading..."))
  }

  return (
    <Container>
      <h1>Hospedagem {hosting[0].name}</h1>
      <Photos>
        {hosting[0].photos.map((p, index) => (<img key={index} src={p.photo_url} alt="lindas fotos"/>))}
      </Photos>      
      <Information>
        <Product>
          <h2>CARACTERÍSTICAS</h2>
          <p>LOCAL: {hosting[0].city_name}</p>
          <p>DESCRIÇÃO: {hosting[0].description}</p>
          <p>PREÇO: R$ {hosting[0].price},00</p>
        </Product>
        <Product>
          <h2>COMODIDADES</h2>
          <p>AR-CONDICIONADO: {hosting[0].air_conditioner ? "Sim" : "Não"}</p>
          <p>CAFÉ DA MANHÃ: {hosting[0].breakfast ? "Sim" : "Não"}</p>
          <p>ESTACIONAMENTO: {hosting[0].parking ? "Sim" : "Não"}</p>
          <p>PISCINA: {hosting[0].pool ? "Sim" : "Não"}</p>
        </Product>
      </Information>      
      <Link to="/hospedagens">Consultar hospedagens</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 80px;
  padding: 60px;
  background:  #ff520de8;
  h1 {
    font-size: 40px;
    margin: 50px;
  }
  a {
    font-size: 30px;
    text-decoration: none;
  }
`
const Photos = styled.div`
  display: flex;
  gap: 30px;
  width: 80%;
  overflow-x: scroll;
  overflow-y: hidden;
  img {
    /* width: 200px; */
    height: 200px;
  }
`
const Information = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
  /* flex-wrap: wrap; */
  padding: 50px;
`
const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 25px;
  background: white;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
  p {
    width: 100%;
    text-align: start;
    font-size: 20px;
    color: hsl(20, 100%, 20%);
  }
  h2 {
    color: hsl(20, 100%, 20%);
    font-weight: 500;
  }
` 