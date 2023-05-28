import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CityContext from "../../context/city.context"
import { useNavigate } from "react-router-dom"
import Instruction from "./Intructions"
import bg1 from "../../assets/bg1.jpeg"


export default function Home() {
  const [cities, setCities] = useState([])
  const {setSelectCity} = useContext(CityContext)
  const navigate = useNavigate()

  useEffect(() => {
    const url = "http://localhost:5000/"
    const promise = axios.get(url)
    promise
    .then((res) => setCities(res.data))
    .catch((err) => console.log(err.response.message))
  }, [])

  function getCity(event) {
    event.preventDefault()    
    navigate("/passagens")
  }

  return (
    <Container>
      <img src={bg1} alt="Resort"/>
      <Orientation>
        <Instruction text="Escolha a cidade que deseja visitar"/>
        <Instruction text="Veja as passagens disponíveis, com preço e datas"/>
        <Instruction text="Veja os locais aonde você pode se hospedar e todo o conforto que eles oferecem"/>
      </Orientation>
      <Form onSubmit={getCity}>
        <Select onChange={e => setSelectCity(e.target.value)}>
          <optgroup label="Cidades"></optgroup>
          {cities.map((city, index) => 
            <option key={index} value={city.id}>{city.name}</option>
          )}
        </Select>
        <button type="submit">CONSULTAR</button>
      </Form>      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
  }
`
const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  button {
    width: 200px;
    height: 30px;
    border-radius: 10px;
  }
`
const Select = styled.select`
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  font-style: italic;
  opacity: 80%;
  font-size: 20px;
`
const Orientation = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  gap: 30px;
  /* max-width: 900px; */
  /* height: 300px; */
`