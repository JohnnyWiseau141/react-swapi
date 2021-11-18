import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Starships from './Starships';
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/starships/", name: "Star Wars Starships"}
  ])
  return (
    <>
    <NavBar navItems={navItems} />
    <Routes>
      <Route path="/starships" element={<Starships/>}/>
    </Routes>
    <p>Star wars spaceships will go here</p>
    </>
  );
}

export default App;