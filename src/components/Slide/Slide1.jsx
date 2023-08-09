import './styles.css'
import CardHome from '../CardHome'
import data from '../../Data/data.json'

function Slide1() {
  return (
    <div className="carousel-item active" data-bs-interval="6000">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.slide1.map((each, index )=> (<CardHome key={index} src={each.src} place={each.place} />))}
    </div>
  </div>
  )
}

export default Slide1