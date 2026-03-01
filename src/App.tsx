import './App.css'
import Navbar from './navbar/Navbar'
import MainSite from './mainsite/MainSite'
import AboutUs from './about/AboutUs'
import BusinessZone from './business/BusinessZone'
import PrivacyPolicy from './privacy/PrivacyPolicy'
import ExhibitionerSearch from './exhibitioners/ExhibitionerSearch'
import ExhibitionerDetail from './exhibitioners/ExhibitionerDetail'
import JobOffers from './joboffers/JobOffers'
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
        <Route path="/klauzula-cv" element={<PrivacyPolicy />} />
        <Route path="/wystawcy" element={<ExhibitionerSearch />} />
        <Route path="/wystawcy/:id" element={<ExhibitionerDetail />} />
        <Route path="/oferty-pracy" element={<JobOffers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
