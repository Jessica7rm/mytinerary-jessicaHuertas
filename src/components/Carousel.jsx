import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import venecia from '/venecia.jpg'
import cancun from '/cancun.jpg'

function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <h2>POPULAR MYTINERARIES</h2>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <div className="card">
              <img src={venecia} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h3 className="card-title">Venecia</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-img-overlay">
                <h3 className="card-title">Cancun</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={venecia} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h3 className="card-title">Venecia</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-img-overlay">
                <h3 className="card-title">Cancun</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="10000">
        <div className="row row-cols-1 row-cols-md-2 g-2">
        <div className="col">
            <div className="card">
              <img src={venecia} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h3 className="card-title">Venecia</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-img-overlay">
                <h3 className="card-title">Cancun</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={venecia} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h3 className="card-title">Venecia</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-img-overlay">
                <h3 className="card-title">Cancun</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="10000">
        <div className="row row-cols-1 row-cols-md-2 g-2">
        <div className="col">
            <div className="card">
              <img src={venecia} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h3 className="card-title">Venecia</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-img-overlay">
                <h3 className="card-title">Cancun</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={venecia} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h3 className="card-title">Venecia</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-img-overlay">
                <h3 className="card-title">Cancun</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel