import React from 'react'
import './styles.css'
import CardItineraries from '../CardItineraries'

const index= () => {
  return (
    <>
      <div className='containItineraries'>
        <CardItineraries />
        <a href="#" className="btn btn-primary">View more</a>
    </div>
    <div className='noitineraries'>
        <img src="/noTinerary.jpg" alt="No Itineraries" />
        <h3>There are no itineraries</h3>
        <p>Work in progress</p>
        <p></p>
      </div>
    </>
  )
}

export default index