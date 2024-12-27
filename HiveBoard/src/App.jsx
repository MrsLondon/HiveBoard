import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element= {<HomePage/>} />
        </Routes>
      </div>
        
    </>
  );
}

export default App
