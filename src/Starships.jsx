import React, {useState, useEffect} from 'react';
import { getAllStarships  } from './services/sw-api';
import { Link } from 'react-router-dom'
import './Starships.css'


const Starships = (props) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(shipData => setResults(shipData.results))
  },[])


  return ( 
    <>
      {results.length ? 
        <>
          <div>
            <h3>Class List</h3>
            <div className="icon-container">
              {console.log(results)}
              {results.map((starship, idx) =>
                <Link to={`/starships/${idx+1}`} state={{ starship }} key={starship.idx}>
                  <div id="classDiv">
                    {starship.name}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </>
        :
        <h2>Loading...</h2>
      }
    </>
  );
}

export default Starships;