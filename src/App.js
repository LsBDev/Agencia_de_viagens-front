import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/cidades/Home"
import Hosting from "./pages/hospedagens/Hosting"
import Tickets from "./pages/passagens/Tickets"
import CityContext from "./context/city.context"
import { useState } from "react"
import ResumeTicket from "./pages/resumo/ResumeTicket"


function App() {
  const [selectCity, setSelectCity] = useState([])
  const [flight, setFlight] = useState({})

  return (
    <CityContext.Provider value={{ selectCity, setSelectCity, setFlight, flight }}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/passagens" element={<Tickets/>}/>
          <Route path="/hospedagens" element={ <Hosting/>}/>
          <Route path="/detalhe/voo" element={ <ResumeTicket/>}/>
          {/* <Route path="*" element={ <Error/>}/> */}
        </Routes>
      </BrowserRouter>
    </CityContext.Provider>
    
  )
}

export default App;
