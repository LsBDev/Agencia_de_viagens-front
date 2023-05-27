import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"

export default function Tickets() {
  const {selectCity} = useContext(CityContext)
  const [tickets, setTickets] = useState([])
  const [minPrice, setMinPrice] = useState(50)
  const [maxPrice, setMaxPrice] = useState(150)

  console.log(maxPrice)
  console.log(minPrice)

  useEffect(() => {
    const url = `http://localhost:5000/fly/city/${selectCity}`
    const promise = axios.get(url)
    promise
    .then((res) => setTickets(res.data))
    .catch((err) => console.log(err.message))
  }, [selectCity])

  return (
    <Container>
      <Sidebar>
        <label for="min">Preço Mínimo</label>
        <Range>
          <p>50</p>          
          <input type="range" min="50" max="100" id="min" onChange={e => setMinPrice(e.target.value)}/>
          <p>100</p>          
        </Range> 
        <label for="max">Preço Máximo</label>
        <Range>
          <p>150</p>          
          <input type="range" min="150" max="200" id="max" onChange={e => setMaxPrice(e.target.value)}/> 
          <p>200</p>       
        </Range>
      </Sidebar>
      <Main>
        {tickets.map((item) =>
          <Product>
            <img src="" alt="" />
            <p>{item.flight_date}</p>
            <p>{item.destination_city}</p>
            <p>{item.price}</p>
          </Product>
        )}
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
const Sidebar = styled.div`
  width: 200px;
  background: #b9b9b9;
  height: 100vh;
`
const Main =styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: lightblue;
  height: 100vh;
`
const Range = styled.div`
  display: flex;
`
const Product = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid black;
  background: lightpink;
`