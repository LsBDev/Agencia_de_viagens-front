import styled from "styled-components"


export default function Sidebar({minPrice, maxPrice, setPriceRange}) {

  return (
    <Side>
      <label for="min"><p>Filtro de Preços</p></label>
      <Range>
        <p>{minPrice},00</p>          
        <input className="slider" type="range" min={minPrice} max={maxPrice} id="min" onChange={e => setPriceRange(e.target.value)}/>
        <p>{maxPrice},00</p>
      </Range>
    </Side>
  )
}

const Side = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ff520de8;
  padding: 100px 30px;
  border: 1px solid black;
  label {
    width: 100%;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
`
const Range = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  p {
    font-size: 12px;
  }
  .slider {
  -webkit-appearance: none;
  background: white;
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
  background: hsl(20, 100%, 20%);
  border-radius: 50%;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 16px;
  aspect-ratio: 1/1;
  background: hsl(20, 100%, 20%);
  border-radius: 50%;
  cursor: pointer;
}

`