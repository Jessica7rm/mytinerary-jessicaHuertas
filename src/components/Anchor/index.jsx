import Nav from 'react-bootstrap/Nav';
import './styles.css'

function index ({ href, text }) {
    return (
        <>
            <Nav.Link href={href}>{text}</Nav.Link>
        </>
    )
}

export default index