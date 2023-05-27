import styled from "styled-components"
import Sidebar from "../../components/Sidebar"
import { useContext, useEffect } from "react"
import CityContext from "../../context/city.context"
import axios from "axios"


export default function Hosting() {
  const {selectCity} = useContext(CityContext)
  console.log(selectCity)

  useEffect(() => {
    const url = `https://localhost:5000/accommodation/city/${selectCity}`
    const promise = axios.get(url)
    promise
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message))
  }, [selectCity])

  return (
    <Container>
    <Sidebar/>
    <Main>

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
  height: 100%;
`