import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'
import Slide1 from '../Slide/Slide1'
import Slide2 from '../Slide/Slide2'
import Slide3 from '../Slide/slide3'

function index() {
  return (
    <div className="cont">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <h2>POPULAR MYTINERARIES</h2>
        <div className="carousel-inner">
          <Slide1 />
          <Slide2 />
          <Slide3 />
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
    </div>
  )
}

export default index