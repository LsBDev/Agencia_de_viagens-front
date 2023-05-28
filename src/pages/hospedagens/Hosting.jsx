import styled from "styled-components"
import Sidebar from "../../components/Sidebar"
import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Hosting() {
  const {selectCity, setSelectHosting} = useContext(CityContext)
  const navigate = useNavigate()
  const [hosting, setHosting] = useState([])
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [priceRange, setPriceRange] = useState()
 
  // console.log(hosting)

  useEffect(() => {
    const url = `http://localhost:5000/accommodation/city/${selectCity}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      const priceList = res.data.map((item) => item.price).sort((a, b) => a - b)
      setMinPrice(priceList[0])
      setMaxPrice(priceList[priceList.length - 1])
      setPriceRange(priceList[priceList.length - 1])
      setHosting(res.data)
    })
    .catch((err) => console.log(err.message))
  }, [selectCity])

  function selectHosting(item) {
    setSelectHosting(item.id)
    navigate("/detalhe/hospedagem")
  }

  return (
    <Container>
    <Sidebar  minPrice={minPrice} maxPrice={maxPrice} setPriceRange={setPriceRange} />
    <Main>
    {
      hosting.map((item, index) => {
        if(item.price <= priceRange) {
          return (
            <Product key={index} onClick={() => selectHosting(item)}>
              <img src="" alt=""/>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </Product>
          )
        }
      })
    }
    </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 80px;
  background: lightcoral;
`
const Main =styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: lightblue;
  /* height: 100vh; */
  height: 100%;`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  border: 1px solid black;
  background: lightpink;
`
