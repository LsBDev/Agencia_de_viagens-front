import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CityContext from "../../context/city.context"
import { useNavigate } from "react-router-dom"


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
    <main>
      <form onSubmit={getCity}>
        <Select onChange={e => setSelectCity(e.target.value)}>
        {
          cities.map((city, index) => 
          <option key={index} value={city.id}>{city.name}</option>
          )
        }
        </Select>
       <button type="submit">Enviar</button>
      </form>
    </main>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 80px;
  background:lightblue;
  /* height: 100vh; */
  height: 100%;
`
const Select = styled.select`
width: 200px;
`