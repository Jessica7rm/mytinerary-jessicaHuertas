import './styles.css'
import { Link as Anchor } from 'react-router-dom'

function index() {
  return (
    <>
      <h3>Let's book the vacation of your dreams!</h3>
      <Anchor to="/cities" className="vmore"><i className="bi bi-airplane-engines"></i>Let's Go</Anchor>
    </>
  )
}

export default index