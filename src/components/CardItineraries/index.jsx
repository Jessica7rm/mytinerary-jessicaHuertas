import React from 'react'
import './styles.css'

function index({ title, img, name, duration, price, hashtags, idCol }) {

    return (
        <div className='card tin'>
            <div className="row g-0 itineraries" style={{ width: '80%' }}>
                <p className='title'>{title}</p>
                <div className="col-md-3">
                    <p>User</p>
                    <img src={img} className="img-fluid img-user" alt="Img User" />
                    <p className="card-text">{name}</p>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text info">Duration: {duration}h</p>
                        <p className="card-text info">Price: {[...Array(price)].map((icon, index) => {
                            return <i className="bi bi-cash" key={index}> </i>
                        })}</p>
                        <p className="card-text info"><i className="bi bi-suit-heart-fill"></i>0 Likes</p>
                    </div>
                    <div className="card-body">
                        {hashtags.map((hashtag, elem) => <p  key={elem} className="card-text">#{hashtag}</p>)}
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + idCol} aria-expanded="false" aria-controls={idCol}>
                        View more
                    </button>
                </div>
                <div className="collapse multi-collapse" id={idCol}>
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