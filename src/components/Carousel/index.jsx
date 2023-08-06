import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'
import Slider from '../Slider'

function index() {
  return (
    <div className="cont">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <h2>POPULAR MYTINERARIES</h2>
        <Slider />
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default index