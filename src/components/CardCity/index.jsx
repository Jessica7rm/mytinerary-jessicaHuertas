import React from 'react'
import './styles.css'

function index({ src, place, country }) {
    return (
        <div className="col">
            <div className="card cardCity">
                <img className="card-img" src={src} alt={place} />
                <div className="card-img-overlay">
                    <p className="card-text">{place}, {country}</p>
                    <a href="/city" className="btn btn-secondary">See more</a>
                </div>
            </div>
        </div>
    );
}


export default index