import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getShipDetails } from "./services/sw-api";

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getShipDetails(location.state.shipTitle.url)
    .then(shipDetailsFromApi => setStarshipDetails
      (shipDetailsFromApi))
  }, [] )

  return ( 
    <div>
      <h2>NAME:</h2>
      <div>{starshipDetails.name}</div>
    </div>
  );
}

export default StarshipDetails;