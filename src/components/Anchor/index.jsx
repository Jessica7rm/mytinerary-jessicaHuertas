import './styles.css'
import { Link as Anchor } from 'react-router-dom'


function index ({ url, text }) {
    return (
        <>
            <Anchor to={url} className="nav-link">{text}</Anchor>
        </>
    )
}

export default index