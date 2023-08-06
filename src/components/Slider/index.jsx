import React from 'react'
import './styles.css'
import venice from '/Venice.jpg'
import cancun from '/cancun.jpg'
import iguazu from '/iguazu.jpg'
import barcelona from '/barcelona.jpg'
import newyork from '/newyork.jpg'
import paris from '/paris.jpg'
import london from '/london.jpg'
import florence from '/florence.jpg'
import rome from '/rome.jpg'
import ephesus from '/ephesus.jpg'
import santorini from '/santorini.jpg'
import moreno from '/moreno.jpg'

function index() {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="6000">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={venice} className="card-img-top" alt="..." />
              <div className="card-title">
                <h3 >Venice</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={cancun} className="card-img-top" alt="..." />
             <div className="card-title">
                <h3>Cancun</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={iguazu} className="card-img-top" alt="..." />
              <div className="card-title">
                <h3>Iguazu</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={barcelona} className="card-img-top" alt="..." />
             <div className="card-title">
                <h3 >Barcelona</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="6000">
      <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={newyork} className="card-img-top" alt="..." />
              <div className="card-title">
                <h3>New York</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={paris} className="card-img-top" alt="..." />
             <div className="card-title">
                <h3>Paris</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={london} className="card-img-top" alt="..." />
              <div className="card-title">
                <h3>London</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={florence} className="card-img-top" alt="..." />
             <div className="card-title">
                <h3>Florence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="6000">
      <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={rome} className="card-img-top" alt="..." />
              <div className="card-title">
                <h3>Rome</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ephesus} className="card-img-top" alt="..." />
             <div className="card-title">
                <h3>Ephesus</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={santorini} className="card-img-top" alt="..." />
              <div className="card-title">
                <h3>Santorini</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={moreno} className="card-img-top" alt="..." />
             <div className="card-title">
                <h3>Perito moreno</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index