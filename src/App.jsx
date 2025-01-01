import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import LandingPage from './pages/LandingPage.jsx'
import Footer from './components/Footer.jsx';

import './App.css'

function App() {
  return (
    <>
      <div className="App">
        
        <Navbar/>
        <Sidebar />
        <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={<HomePage />} /> 
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

       
        <Footer/>
      </div>
        
    </>
  );
}

export default App
