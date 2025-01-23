import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Footer from "./components/Footer.jsx";
import { Draggable, Droppable } from "react-beautiful-dnd";
import BoardManager from "./components/BoardManager.jsx";
import Header from "./components/Header.jsx";
import AboutPage from "./pages/AboutPage.jsx"

function App() {
  // Initialize board state with categorized lists
  const [allboard, setAllBoard] = useState(() => {
    const categorizedLists = {
      "To Do": [],
      "In Progress": [],
      Done: [],
    };

    kanbanData.forEach((task) => {
      categorizedLists[task.status].push({
        id: task.id,
        title: task.title,
      });
    });

    return {
      active: 0,
      boards: [
        {
          list: [
            {
              id: "1",
              title: "To Do",
              items: categorizedLists["To Do"],
            },
            {
              id: "2",
              title: "In Progress",
              items: categorizedLists["In Progress"],
            },
            {
              id: "3",
              title: "Done",
              items: categorizedLists["Done"],
            },
          ],
        },
      ],
    };
  });

  const activeBoard = allboard.boards[allboard.active];
  return (
    <BoardContext.Provider value={{ allboard, setAllBoard }}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
      </div>
    </BoardContext.Provider>
  );
}

export default App;
