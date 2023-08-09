import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'
import Slide from '../Slide/Slide'

function index() {
  return (
    <div className="cont">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <h2>POPULAR MYTINERARIES</h2>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <Slide slide={0} />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <Slide slide={1} />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <Slide slide={2} />
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
    </div>
  )
}

export default index