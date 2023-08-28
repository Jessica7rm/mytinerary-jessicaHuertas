import React from 'react'
import './styles.css'


function index() {
    return (
        <div className='card itineraries'>
            <div className="row g-0">
                <div className="col-md-4">
                    <p className="card-text">HashTag: #Amazing #relax #tripboat</p>
                    <img src="/venice1.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body gap-3">
                        <img src="/venice1.jpg" className="img-fluid img-user" alt="foto perfil" />
                        <p className="card-text">User: Jessica</p>
                        <p className="card-text">Duration: 2h</p>
                        <p className="card-text">Price: 2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index