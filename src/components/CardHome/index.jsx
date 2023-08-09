import React from 'react'
import './styles.css'

function index({ src, place }) {
  return (
    <div className="col">
            <div className="card">
              <img src={src} className="card-img-top" alt={place} />
              <div className="card-title">
                <h3>{place}</h3>
              </div>
            </div>
          </div>
  )
}

export default index