import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getShipDetails } from "./services/sw-api";

const StarshipDetails = (props) => {
  // const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()
  console.log(location)
  const starship = location.state.starship
  // useEffect(() => {
  //   getShipDetails(location.state)
  //   .then(shipDetailsFromApi => setStarshipDetails
  //     (shipDetailsFromApi))
  // }, [] )

  return ( 
    <div>
      <h2>NAME:</h2>
      <div>{starship.name}</div>
      <div>{starship.model}</div>

    <Link to="/">
    Return to Main page
    </Link>

    </div>
  );
}

export default StarshipDetails;