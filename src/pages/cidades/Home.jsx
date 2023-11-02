import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CityContext from "../../context/city.context"
import { useNavigate } from "react-router-dom"
import Instruction from "./Intructions"
import bg1 from "../../assets/bg1.jpeg"
import Colors from "../../styles/Colors"



export default function Home() {
  const [cities, setCities] = useState([])
  const {setSelectCity, setCity} = useContext(CityContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;

    axios.get(`${url}/`)
    .then((res) => {
      console.log(res.data)
      setCities(res.data)
      setCity(undefined)

    })
    .catch((err) => console.log(err))
  }, [setCity])

  function getCity(event) {
    event.preventDefault()    
    navigate("/passagens")
  }


  return (
    <Container>
      <img src={bg1} alt="Resort"/>
      <Form onSubmit={getCity}>
        <Orientation>
          <Instruction>
            <p>Escolha a cidade</p>
          </Instruction> 
          <Instruction>
            <p>Consulte as passagens</p>
          </Instruction> 
          <Instruction>
            <p>Consulte hospedagens</p>
          </Instruction> 
        </Orientation>
        <Select onChange={e => setSelectCity(e.target.value)}>
          <optgroup label="Cidades"></optgroup>
          {cities?.map((city, index) => 
            <option key={index} value={city.id}>{city.name}</option>
          )}
        </Select>
        <button type="submit"><p>CONSULTAR</p></button>
      </Form>      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 105px;
  height: 100vh;
  img {
    object-fit: cover;
    width: 100%;
    height: 140%;
    position: absolute;
    z-index: -2;
    min-width: 375px;
  }
`
const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;
  button {
    width: 200px;
    border: none;
    border-radius: 10px;
    padding: 10px 0;
    box-shadow: 3px 3px 2px ${Colors.black[4]};
    background-color: ${Colors.primaryColor[1]};
    :hover {
      background-color:  ${Colors.primaryColor[3]};
      cursor: pointer;
    }
  }
`
const Select = styled.select`
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  font-style: italic;
  opacity: 80%;
  font-size: 20px;
  min-width: 250px;
`
const Orientation = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 30px;
  min-width: 250px;
  gap: 30px;
  @media (max-width: 780px) {
    flex-direction: column;
    margin-top: 120px;
  }
`