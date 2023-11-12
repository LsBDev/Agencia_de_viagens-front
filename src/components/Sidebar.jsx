import styled from "styled-components"
import Colors from "../styles/Colors"

export default function Sidebar({minPrice, maxPrice, setPriceRange}) {

  return (
    <Side>
      <p>Filtros</p>
      <RangeContainer>
        <h2>Mínimo</h2>
        <Range>
          <p>{minPrice},00</p>          
          
          <input className="slider" type="range" min={minPrice} max={maxPrice} id="min" onChange={e => setPriceRange(e.target.value)}/>
          <p>{maxPrice},00</p>
        </Range>
      </RangeContainer>
      {/* <RangeContainer>
        <h2>Máximo</h2>
        <Range>
          <p>{minPrice},00</p>          
          <input className="slider" type="range" min={minPrice} max={maxPrice} id="min" onChange={e => setPriceRange(e.target.value)}/>
          <p>{maxPrice},00</p>
        </Range>
      </RangeContainer> */}
    </Side>
  )
}

const Side = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  background: ${Colors.primaryColor[2]};
  padding: 50px 20px;
  border: 1px solid black;
  @media (max-width: 800px) {
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    background: ${Colors.primaryColor[1]};
    p {
      margin: auto 0;
    }
  }
`
const RangeContainer = styled.div`
  margin: auto;
  h2 {
    text-align: center;
    padding: 2px;
  }
`
const Range = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  p {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    margin: auto 0;
  }
  .slider {
  -webkit-appearance: none;
  background: ${Colors.white[1]};
  outline: none;
  opacity: 0.7;
  height: 7px;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 3.5px;
  }
  .slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  aspect-ratio: 1/1;
  background: ${Colors.secondaryColor};
  border-radius: 50%;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 16px;
  aspect-ratio: 1/1;
  background: ${Colors.secondaryColor};
  border-radius: 50%;
  cursor: pointer;
}

`