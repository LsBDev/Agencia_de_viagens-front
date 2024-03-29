import styled from "styled-components"
import Sidebar from "../../components/Sidebar"
import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import hotel from "../../assets/Hotel.png"
import bg3 from "../../assets/bg3.jpg"


export default function Hosting() {
  const {selectCity, setSelectHosting, city} = useContext(CityContext)
  const navigate = useNavigate()
  const [hosting, setHosting] = useState([])
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [priceRange, setPriceRange] = useState()
  console.log(hosting)
 

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/accommodation/city/${selectCity}`
    // const url = `https://freela-api-lrnc.onrender.com/accommodation/city/${selectCity}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      const priceList = res.data.map((item) => item.price).sort((a, b) => a - b)
      setMinPrice(priceList[0])
      setMaxPrice(priceList[priceList.length - 1])
      setPriceRange(priceList[priceList.length - 1])
      setHosting(res.data)
    })
    .catch((err) => console.log(err))
  }, [selectCity])

  function selectHosting(item) {
    setSelectHosting(item.id)
    navigate("/detalhe/hospedagem")
  }

  return (
    <Container>
    <Background src={bg3} alt="Recepção" />
    <Sidebar  minPrice={minPrice} maxPrice={maxPrice} setPriceRange={setPriceRange} />
    <AvailableTickets>
        <Title>{city?.name}</Title>
    <Main>
    {
      hosting?.map((item, index) => {
        if(item.price <= priceRange) {
          return (
            <Product key={index} onClick={() => selectHosting(item)}>
              <img src={hotel} alt="Hotel logo"/>
              <p>Hotel: {item.name}</p>
              <p>Preço: R$ {item.price},00</p>
            </Product>
          )
        }
      })
    }
    </Main>
    </AvailableTickets>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 105px;
`
const Background = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 80%;
  z-index: -2;
`
const AvailableTickets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 256px;
  margin: auto;
`
const Title = styled.h1`
  width: 100%;
  margin-top: 100px;
  text-align: center;
  font-weight: bolder;
  font-size: 90px;
  color: white;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: white;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
  img {
    width: 200px;
  }
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
