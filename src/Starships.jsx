import React, {useState, useEffect} from 'react';
import { getAllStarships  } from './services/sw-api';
import { Link } from 'react-router-dom'

const Starships = (props) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(shipData => setResults(shipData.results))
  },[])


  return ( 
    <>
      <p>Starship List</p>
      <div>
        
        {results.map(starship => 
          <div>
            {starship.name}
          </div>
        )}
      </div>
    </>
  );
}

export default Starships;