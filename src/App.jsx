import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomeSidebar from './components/HomeSidebar.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Footer from './components/Footer.jsx';
import { BoardContext } from './context/BoardContext';
import BoardManager from './components/BoardManager.jsx';
import kanbanData from './kanban.json';
import './App.css'

function App() {

  const boardData = {
    active:0,
    boards:[
      {
        name:'My Trello Board',
        bgcolor:'#069',
        list:[
          {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
          {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
          {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
        ]
      }
    ]
  }
  const [allboard,setAllBoard] = useState(boardData); 
  
  return (
    <>
      <div className="App">
        
        <Navbar/>
        
        <BoardContext.Provider value={{allboard,setAllBoard}}>
        <div className='content flex'>
        {location.pathname === '/home' && <HomeSidebar />}
        <BoardManager></BoardManager>
      </div>
        </BoardContext.Provider>
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
