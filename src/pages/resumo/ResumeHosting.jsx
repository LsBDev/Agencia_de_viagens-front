import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

export default function ResumeHosting() {
  const {selectHosting} = useContext(CityContext)
  const [hosting, setHosting] = useState([])
  // console.log(hosting)


  useEffect(() => {
    const url = `http://localhost:5000/accommodation/${selectHosting}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      setHosting(res.data)
    })
    .catch((err) => console.log(err.message))
  }, [selectHosting])

  if (!hosting[0]) {
    return(console.log("Loading..."))
  }

  return (
    <Container>
      <h1>Passagem de hospedagem</h1>
      <Photos>
        {hosting[0].photos.map((p) => (<img src={p.photo_url} alt="lindas fotos"/>))}
      </Photos>      
      <Information>
        <div></div>
        <div></div>
      </Information>      
      <Link to="/hospedagens">Consultar hospedagens</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 80px;
  padding: 20px;
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 50px;
  }
  a {
    font-size: 30px;
    text-decoration: none;
  }
`
const Photos = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  img {
    width: 200px;
    height: 200px;
  }
  overflow-x: hidden;
  /* overflow-y: hidden;   */
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;
  background: lightcoral;
  p {
    width: 100%;
    text-align: start;
    font-size: 30px;
    font-weight: 300;
  }
`