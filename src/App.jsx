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
        //name:'To do list',
        //bgcolor:'#069',
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











/*
export default App 
import Footer from "./components/Footer.jsx";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar.jsx";
// import AboutPage from "./pages/AboutPage.jsx";
// import ErrorPage from "./pages/ErrorPage.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import LandingPage from "./pages/LandingPage.jsx";
// import { Routes, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9966CC", // Light purple
      light: "#d1c4e9",
      dark: "#7e57c2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffcc80", // Optional: custom secondary color
    },
  },
});

const App = () => {
  const drawerWidth = 240;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ bgcolor: "primary.main", display: "flex" }}>
        <Navbar />
        <Sidebar />

        {/* <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes> }

   
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 5,
          }}
        >
          <Toolbar />
          <Typography variant="h4">Welcome to My Website</Typography>
          <Typography paragraph>
            This is the main content area. Here you can add your content.
          </Typography>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;*/
