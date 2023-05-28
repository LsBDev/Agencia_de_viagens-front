import styled from "styled-components"


export default function Sidebar({minPrice, maxPrice, setPriceRange}) {

  return (
    <Side>
      <label for="min">Preço</label>
      <Range>
        <p>{minPrice}</p>          
        <input type="range" min={minPrice} max={maxPrice} id="min" onChange={e => setPriceRange(e.target.value)}/>
        <p>{maxPrice}</p>
      </Range>
    </Side>
  )
}

const Side = styled.div`
  display: flex;
  flex-direction: column;
  background: #b9b9b9;
  padding: 30px;
  label {
    width: 100%;
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
`
const Range = styled.div`
  display: flex;
  p {
    font-size: 16px;
    font-style: oblique;
  }
`