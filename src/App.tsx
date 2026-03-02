import './App.css'
import Navbar from './navbar/Navbar'
import MainSite from './mainsite/MainSite'
import AboutUs from './about/AboutUs'
import BusinessZone from './business/BusinessZone'
import PrivacyPolicy from './privacy/PrivacyPolicy'
import ExhibitionerSearch from './exhibitioners/ExhibitionerSearch'
import ExhibitionerDetail from './exhibitioners/ExhibitionerDetail'
import JobOffers from './joboffers/JobOffers'
import Schedule from './schedule/Schedule'
// import ExhibitionerSearch from './exhibitioner_search/ExhibitionerSearch'
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
        <Route path="/harmonogram" element={<Schedule />} />
        {/* <Route path="/wystawcy" element={<ExhibitionerSearch />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
