import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
// Components
import Navbar from './Navbar/Navbar'
import Home from './Home'
import Footer from './Footer/Footer'
import Place from './PlaceToStay/PlaceToStay'

function App() {

 

  return (
    
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="place" element={<Place />} />


      </Routes>
      <Footer />

      </BrowserRouter>


    </div>

  )
}

export default App
