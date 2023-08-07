import './styles.css'
import CardHome from '../CardHome'

function Slide2() {
  let data = [
    { src: 'newyork.jpg', place: 'New York' },
    { src: 'paris.jpg', place: 'Paris' },
    { src: 'london.jpg', place: 'London' },
    { src: 'florence.jpg', place: 'Florence' }
  ]
  return (
    <div className="carousel-item" data-bs-interval="6000">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((each, index) => (<CardHome key={index} src={each.src} place={each.place} />))}
      </div>
    </div>
  )
}

export default Slide2