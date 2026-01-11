import './App.css'
import Navbar from './navbar/Navbar'
import MainSite from './mainsite/MainSite'
import AboutUs from './about/AboutUs'
import BusinessZone from './business/BusinessZone'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/strefa-firm" element={<BusinessZone />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
