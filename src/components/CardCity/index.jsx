import React from 'react'
import './styles.css'

function index({ id, image, place, country }) {
    return (
        <div className="col">
            <div className="card cardCity">
                <img className="card-img" src={image} alt={place} />
                <div className="card-img-overlay">
                    <p className="card-text"><i className="bi bi-geo-alt"></i>{place}, {country}</p>
                    <a href={id} className="btn btn-secondary">See more</a>
                </div>
            </div>
        </div>
    );
}


export default index