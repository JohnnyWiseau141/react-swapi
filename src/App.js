import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Starships from './Starships';
import StarshipDetails from './StarshipDetails';
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/", name: "Star Wars Starships"}
  ])
  return (
    <>
    <NavBar navItems={navItems} />
    <Routes>
      <Route path="/"/>
      <Route path="/starships/:id" element={<StarshipDetails/>}/>
    </Routes>
    <div>
      <Starships />
    </div>
    </>
  );
}

export default App;