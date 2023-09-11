import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Anchor from '../Anchor'
import iconPerson from '/person-fill.svg'
import Button from 'react-bootstrap/Button';
import './styles.css'
import { useSelector, useDispatch } from "react-redux";
import getUsersAction from "../../store/actions/usersActions";
import { NavLink } from 'react-router-dom';

function index() {
    let data = [
        { url: '/', text: 'Home' },
        { url: '/cities', text: 'Cities' }
    ]

    const user = useSelector(store => store.usersReducers.user)
    const dispatch = useDispatch();
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary sm-1">
                    <Container fluid>
                        <Navbar.Brand >My Tinerary</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Travel Agency
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 gap-4 pe-3">
                                    {data.map((each, index) => (<Anchor key={index} url={each.url} text={each.text} />))}

                                    {user ? (
                                        <Button className="btn btn-primary" onClick={() => dispatch(getUsersAction.sign_out())}>
                                            {" "}
                                            Log out{" "}
                                        </Button>
                                    ) : (
                                        <>
                                            <Nav.Link href="/signUp" id="register">Register</Nav.Link>
                                            <Nav.Link href="/signIn" id="login"><img id="icon" src={iconPerson} />Login</Nav.Link>
                                        </>
                                    )}

                                    {/*  */}

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}


export default index