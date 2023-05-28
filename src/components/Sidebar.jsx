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
  width: 200px;
  background: #b9b9b9;
  /* height: 100vh; */
  height: 100%;
`
const Range = styled.div`
  display: flex;
`