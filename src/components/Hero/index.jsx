import './styles.css'
import CallAction from '../CallAction'

function index() {
  return (
    <div className="contenedor">
        <div className="text">
          <h1>Find the perfect destination</h1>
          <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of
            intinerary options, planning your next trip has never been easier.</p>
            <CallAction />
        </div>
    </div>
  )
}

export default index