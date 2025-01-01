import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Sidebar from "./components/Sidebar";
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
      </div>
        
    </>
  );
}

export default App
