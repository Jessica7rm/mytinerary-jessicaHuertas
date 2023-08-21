import React from 'react'
import './styles.css'
import { useState, useEffect } from 'react'
import { getCity } from '../../service/citiesQueries'
import { useParams } from 'react-router-dom'

const index = () => {
  const [city, setCity] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCity(id)
      .then(resp => setCity(resp))
      .catch((err) => console.log(err));
  }, [])

  return (
    <main>
        <div className="row row-cols-1">
          <div className="col">
            <div className="card cardDet">
              <img className="card-img" src={city.image} alt={city.place} />
              <div className="card-img-overlay">
                <p className="card-text"><i className="bi bi-geo-alt"></i>{city.place}, {city.country}</p>
                <a href="/cities" className="btn btn-secondary">View Itineraries</a>
              </div>
            </div>
          </div>
        </div>
        <div className='noitineraries'>
        <img src="/noItineraries.jpg" alt="No Itineraries" />
        <h3>There are no itineraries</h3>
        </div>
    </main>
  )
}

export default index