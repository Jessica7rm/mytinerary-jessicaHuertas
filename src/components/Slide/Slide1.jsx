import './styles.css'
import CardHome from '../CardHome'

function Slide1() {
  let data = [
    { src: 'Venice.jpg', place: 'Venice' },
    { src: 'cancun.jpg', place: 'Cancun' },
    { src: 'iguazu.jpg', place: 'Iguazu' },
    { src: 'barcelona.jpg', place: 'Barcelona' },
]
  return (
    <div className="carousel-item active" data-bs-interval="6000">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.map((each, index )=> (<CardHome key={index} src={each.src} place={each.place} />))}
    </div>
  </div>
  )
}

export default Slide1