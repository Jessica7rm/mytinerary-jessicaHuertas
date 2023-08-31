import React from 'react'
import './styles.css'

function index({title, name, duration, price, hashtags}) {
    return (
        <div className='card tin' style={{ width: '80%' }}>
            <div className="row g-0 itineraries" style={{ width: '80%' }}>
                <p className='title'>{title}</p>
                <div className="col-md-3">
                    <p>User</p>
                    <img src="/person-fill.svg" className="img-fluid img-user" alt="..." />
                    <p className="card-text">{name}</p>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">Duration: {duration}</p>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text"><i className="bi bi-suit-heart-fill"></i>Like</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">#{hashtags}</p>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        View more
                    </button>
                </div>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body texin">
                        <p>Under Construction</p>
                        <img src="/working.jpg" alt="Work in progress" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default index