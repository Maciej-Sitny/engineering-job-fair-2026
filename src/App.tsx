import './App.css'
import Navbar from './navbar/Navbar'
import MainSite from './mainsite/MainSite'
import AboutUs from './about/AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/o-nas" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
