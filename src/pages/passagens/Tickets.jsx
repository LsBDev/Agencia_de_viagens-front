import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"
import Sidebar from "../../components/Sidebar"
import { Link, useNavigate } from "react-router-dom"
import aviao from "../../assets/Aviao1.png"
import hotel from "../../assets/Hotel.png"
import dayjs from "dayjs"


export default function Tickets() {
  const {selectCity, setFlight} = useContext(CityContext)
  const [tickets, setTickets] = useState([])
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [priceRange, setPriceRange] = useState()
  const [city, setCity] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const url1 = `${process.env.REACT_APP_API_URL}/fly/city/${selectCity}`
    const url2 = `${process.env.REACT_APP_API_URL}/`
    // const url = `https://freela-api-lrnc.onrender.com/fly/city/${selectCity}`
    axios.get(url2)
    .then((res) => {
      // console.log(res.data)
      setCity(res.data.find((city) => city.id == selectCity))
    })
    .catch((err) => {
      console.log(err.response.data)
    })

    const promise = axios.get(url1)
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
    <Container >
      <Background src={city?.imageURL} alt="Background Dinâmico" />
      <Sidebar minPrice={minPrice} maxPrice={maxPrice} setPriceRange={setPriceRange} />
      <AvailableTickets>
        <Title>{city?.name}</Title>
        <Main>
          {tickets.map((item, index) => {
            const data = item.flight_date
            const dataFormatada = dayjs(data).format('YYYY/MM/DD')
            if(item.price <= priceRange) {
              return (
                <Product key={index} onClick={() => selectTicket(item)}>
                  <img src={aviao} alt="Avião" />
                  <p><span>DATA</span>: {dataFormatada}</p>
                  <p><span>COMPANHIA</span>: {item.company}</p>
                  <p><span>DESTINO</span>: {item.destination_city}</p>
                  <p><span>PREÇO</span>: R$ {item.price},00</p>
                </Product>
              )
            }}          
          )}
        </Main>
        <Hotels>
          {selectCity ? <Link to="/hospedagens">Hoteis</Link> : <></>}
          <img src={hotel} alt="hotelzinho" />
        </Hotels>
      </AvailableTickets>
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
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 80%;
  `
const AvailableTickets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 256px;
  margin: auto;

`
const Hotels = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
  img {
    width: 40px;
  }
  a {
    font-size: 30px;
    color:  hsl(20, 100%, 20%);
  }
`
const Title = styled.h1`
  width: 100%;
  margin-top: 100px;
  text-align: center;
  font-weight: bolder;
  font-size: 90px;
  color: rgb(102, 34, 0);
`
const Main =styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 50px;
  margin: auto;
  padding: 100px;
`
const Product = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: white;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
  img {
    width: 150px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    width: 100%;
    line-height: 25px;
    color: hsl(20, 100%, 20%);
    span {
      font-weight: bolder;
    }
  }
  :hover {
    scale: 101%;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    transition-property: scale box-shadow;
    transition: .2s;
  }
`
