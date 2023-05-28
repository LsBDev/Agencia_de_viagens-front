import { useContext, useEffect, useState } from "react"
import CityContext from "../../context/city.context"
import styled from "styled-components"
import axios from "axios"

export default function ResumeHosting() {
  const {selectHosting} = useContext(CityContext)
  const [hosting, setHosting] = useState()
  // console.log(hosting)


  useEffect(() => {
    const url = `http://localhost:5000/accommodation/${selectHosting}`
    const promise = axios.get(url)
    promise
    .then((res) => {
      console.log(res.data)
      // setHosting(res.data)
    })
    .catch((err) => console.log(err.message))
  }, [selectHosting])

  return (
    <Container>
      {selectHosting}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 80px;
  background: lightcoral;
`