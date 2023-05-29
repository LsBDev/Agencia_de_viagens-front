import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"
import Sidebar from "../../components/Sidebar"
import { useNavigate } from "react-router-dom"
import aviao from "../../assets/Aviao1.png"
import bg2 from "../../assets/bg2.jpg"
import dayjs from "dayjs"


export default function Tickets() {
  const {selectCity, setFlight} = useContext(CityContext)
  const [tickets, setTickets] = useState([])
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [priceRange, setPriceRange] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    // const url = `${process.env.REACT_APP_API_URL}/fly/city/${selectCity}`
    const url = `https://freela-api-lrnc.onrender.com/fly/city/${selectCity}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      const priceList = res.data.map((item) => item.price).sort((a, b) => a - b)
      setMinPrice(priceList[0])
      setMaxPrice(priceList[priceList.length - 1])
      setPriceRange(priceList[priceList.length - 1])
      setTickets(res.data)   
    })
    .catch((err) => console.log(err))
  }, [selectCity])

  function selectTicket(item) {
    setFlight(item)
    navigate("/detalhe/voo")
  }

  return (
    <Container>
      <Background src={bg2} alt="Torre Eiffel" />
      <Sidebar minPrice={minPrice} maxPrice={maxPrice} setPriceRange={setPriceRange} />
      <Main>
        {tickets.map((item, index) => {
          const data = item.flight_date
          const dataFormatada = dayjs(data).format('YYYY/MM/DD')
          if(item.price <= priceRange) {
            return (
              <Product key={index} onClick={() => selectTicket(item)}>
                <img src={aviao} alt="Avião" />
                <p>DATA: {dataFormatada}</p>
                <p>COMPANHIA: {item.company}</p>
                <p>DESTINO: {item.destination_city}</p>
                <p>PREÇO: R$ {item.price},00</p>
              </Product>
            )
          }}          
        )}
      </Main>    
    </Container>
     
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 105px;
  height: 100vh;
`
const Background = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
  opacity: 80%;
`
const Main =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  /* padding: 100px 50px; */
  justify-content: space-around;
`
const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: white;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
  p {
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    color: hsl(20, 100%, 20%);
  }
  :hover {
    scale: 101%;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    transition-property: scale box-shadow;
    transition: .2s;
  }
`
