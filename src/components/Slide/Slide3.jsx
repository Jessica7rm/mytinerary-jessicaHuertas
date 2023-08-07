import './styles.css'
import CardHome from '../CardHome'

function Slide3() {
  let data = [
    { src: 'rome.jpg', place: 'Rome' },
    { src: 'ephesus.jpg', place: 'Ephesus' },
    { src: 'santorini.jpg', place: 'Santorini' },
    { src: 'moreno.jpg', place: 'Perito moreno' },
  ]
  return (
    <div className="carousel-item" data-bs-interval="6000">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((each, index) => (<CardHome key={index} src={each.src} place={each.place} />))}
      </div>
    </div>
  )
}

export default Slide3