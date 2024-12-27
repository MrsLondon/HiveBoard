import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
        
    </>
  );
}

export default App
