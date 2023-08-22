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
      <div className="card cardDet text-bg-dark">
        <img src={city.image} className="card-img" alt={city.place} />
        <div className="card-img-overlay">
          <h5 className="card-title titleDet"><i className="bi bi-geo-alt"></i>{city.place}, {city.country}</h5>
          <a href="/cities" className="btn btn-secondary">View Itineraries</a>
        </div>
      </div>
      <div className="card-body cardDet">
          <p className="card-text">{city.description}</p>
        </div>
      <div className='noitineraries'>
        <img src="/noTinerary.jpg" alt="No Itineraries" />
        <h3>There are no itineraries</h3>
        <p>Work in progress</p>
      </div>
    </main>
  )
}

export default index