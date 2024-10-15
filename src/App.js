import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './pages/Home';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);

  const handleSignup = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login users={users} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
