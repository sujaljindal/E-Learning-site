import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainPage from './Pages/MainPage/MainPage';
import { LearnProvider } from './context/LearnContext';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LearnProvider>
      <>
        {showLogin && <Login setShowLogin={setShowLogin} />}
        <div className="app">
          <NavBar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<Login />} />  {/* Define route here */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </>
    </LearnProvider>
  );
}

export default App;
