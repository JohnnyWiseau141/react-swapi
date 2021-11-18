import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/starships", name: "Starships"}
  ])
  return (
    <>
    <p>Star wars spaceships will go here</p>
    </>
  );
}

export default App;