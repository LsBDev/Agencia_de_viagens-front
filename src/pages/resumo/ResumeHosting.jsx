import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import styled from "styled-components"
import axios from "axios"

export default function ResumeHosting() {
  const {selectHosting} = useContext(CityContext)
  const [hosting, setHosting] = useState([])


  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/accommodation/${selectHosting}`
    // const url = `https://freela-api-lrnc.onrender.com/accommodation/${selectHosting}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      console.log(res.data)
      setHosting(res.data)
    })
    .catch((err) => console.log(err))
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
      {/* <Link to="/hospedagens">Consultar hospedagens</Link> */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 105px;
  background:  #ff520de8;
  h1 {
    font-size: 40px;
    margin: 50px;
  }
`
const Photos = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 200px;
  width: 80%;
  overflow-y: hidden;
  img {
    width: 150px;
    height: 200px;
  }
`
const Information = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  gap: 30px;
  padding: 50px;
`

const Product = styled.div`
  display: flex;
  width: 50%;
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