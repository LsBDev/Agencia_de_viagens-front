import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/cidades/Home"
import Hosting from "./pages/hospedagens/Hosting"
import Tickets from "./pages/passagens/Tickets"
import CityContext from "./context/city.context"
import { useState } from "react"
import ResumeTicket from "./pages/resumo/ResumeTicket"
import ResumeHosting from "./pages/resumo/ResumeHosting"
// import Error from "./pages/erro/Error"


function App() {
  const [selectCity, setSelectCity] = useState(1)
  const [selectHosting, setSelectHosting] = useState()
  const [flight, setFlight] = useState({})
  const [city, setCity] = useState(1)

  return (
    <CityContext.Provider value={{ selectCity, setSelectCity, setFlight, flight, selectHosting, setSelectHosting, city, setCity }}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/passagens" element={<Tickets/>}/>
          <Route path="/hospedagens" element={ <Hosting/>}/>
          <Route path="/detalhe/voo" element={ <ResumeTicket/>}/>
          <Route path="/detalhe/hospedagem" element={ <ResumeHosting/>}/>
          {/* <Route path="*" element={ <Error/>}/> */}
        </Routes>
      </BrowserRouter>
    </CityContext.Provider>
    
  )
}

export default App;
