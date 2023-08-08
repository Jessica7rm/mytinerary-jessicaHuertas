import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Anchor from '../Anchor'
import iconPerson from '/person-fill.svg'
import './styles.css'

function index() {
    let data = [
        { url: '/', text: 'Home' },
        { url: '/cities', text: 'Cities' }
    ]
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>My Tinerary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        {data.map((each, index )=> (<Anchor key={index} url={each.url} text={each.text} />))}
                        <Nav.Link href="" id="login"><img id="icon" src={iconPerson} />Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default index