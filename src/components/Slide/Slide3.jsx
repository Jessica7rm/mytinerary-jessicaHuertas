import './styles.css'
import CardHome from '../CardHome'
import data from '../../Data/data.json'

function Slide3() {
  return (
    <div className="carousel-item" data-bs-interval="6000">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.slide3.map((each, index) => (<CardHome key={index} src={each.src} place={each.place} />))}
      </div>
    </div>
  )
}

export default Slide3