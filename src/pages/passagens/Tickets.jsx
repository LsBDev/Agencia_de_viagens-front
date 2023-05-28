import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"
import Sidebar from "../../components/Sidebar"
import { useNavigate } from "react-router-dom"
import aviao from "../../assets/Aviao1.png"
import bg2 from "../../assets/bg2.jpg"


export default function Tickets() {
  const {selectCity, setFlight} = useContext(CityContext)
  const [tickets, setTickets] = useState([])
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [priceRange, setPriceRange] = useState()

  const navigate = useNavigate()

  console.log(priceRange)

  useEffect(() => {
    const url = `http://localhost:5000/fly/city/${selectCity}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      const priceList = res.data.map((item) => item.price).sort((a, b) => a - b)
      setMinPrice(priceList[0])
      setMaxPrice(priceList[priceList.length - 1])
      setPriceRange(priceList[priceList.length - 1])
      setTickets(res.data)   
    })
    .catch((err) => console.log(err.message))
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
          if(item.price <= priceRange) {
            return (
              <Product key={index} onClick={() => selectTicket(item)}>
                <img src={aviao} alt="Avião" />
                <p>{item.flight_date}</p>
                <p>{item.company}</p>
                <p>{item.destination_city}</p>
                <p>{item.price}</p>
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
  margin-top: 80px;
  height: 100vh;
`
const Background = styled.img`
  width: 100vw;
  height: 100vh;
  opacity: 80%;
  position: absolute;
  z-index: -2;
`
const Main =styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 100px 50px ;
  justify-content: space-around;
  a {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    text-decoration: none;
    color: black;
    background: lightcoral;
  }
  p {
    font-size: 20px;
    line-height: 25px;
    width: 100%;
  }
`
const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 0 20px;
  border: 1px solid black;
  border-radius: 10px;
  background: #946a5a;
`
