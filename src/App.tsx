import './App.css'
import Navbar from './navbar/Navbar'
import MainSite from './mainsite/MainSite'
import AboutUs from './about/AboutUs'
import BusinessZone from './business/BusinessZone'
import PrivacyPolicy from './privacy/PrivacyPolicy'
import Regulations from './regulations/Regulations'
import RegulaminKonkursu from './regulations/RegulaminKonkursu'
import RegulaminITP from './regulations/RegulaminITP'
import RODO from './regulations/RODO'
import KlauzulaCV from './regulations/KlauzulaCV'
import ExhibitionerSearch from './exhibitioners/ExhibitionerSearch'
import ExhibitionerDetail from './exhibitioners/ExhibitionerDetail'
import JobOffers from './joboffers/JobOffers'
import JobOfferDetail from './joboffers/JobOfferDetail'
import Schedule from './schedule/Schedule'
// import ExhibitionerSearch from './exhibitioner_search/ExhibitionerSearch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import ScrollToTop from './ScrollToTop'
import Analytics from './components/Analytics'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/strefa-firm" element={<BusinessZone />} />
        <Route path="/klauzula-cv" element={<PrivacyPolicy />} />
        <Route path="/regulaminy" element={<Regulations />} />
        <Route path="/regulaminy/konkurs" element={<RegulaminKonkursu />} />
        <Route path="/regulaminy/regulamin" element={<RegulaminITP />} />
        <Route path="/regulaminy/rodo" element={<RODO />} />
        <Route path="/regulaminy/klauzula-cv" element={<KlauzulaCV />} />
        <Route path="/harmonogram" element={<Schedule />} />
        <Route path="/wystawcy" element={<ExhibitionerSearch />} />
        <Route path="/wystawcy/:id" element={<ExhibitionerDetail />} />
        <Route path="/oferty-pracy" element={<JobOffers />} />
        <Route path="/oferty-pracy/:id" element={<JobOfferDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

