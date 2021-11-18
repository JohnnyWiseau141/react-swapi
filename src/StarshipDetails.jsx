import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getShipDetails } from "./services/sw-api";
import './StarshipDetails.css'

const StarshipDetails = (props) => {

  let location = useLocation()
  console.log(location)
  const starship = location.state.starship

  return ( 
    <div id="info">
      <h2>NAME:</h2>
      <div>{starship.name}</div>
      <div>{starship.model}</div>

    <Link to="/">
    Return
    </Link>

    </div>
  );
}

export default StarshipDetails;