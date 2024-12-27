import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
