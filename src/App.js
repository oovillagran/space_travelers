import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import DragonsList from './components/DragonsList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/dragons" element={<DragonsList />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
