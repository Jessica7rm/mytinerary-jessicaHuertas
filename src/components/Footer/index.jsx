import './styles.css'
import Anchor from '../Anchor'


function index() {
    let data = [
        { url: '/', text: 'Home' },
        { url: '/cities', text: 'Cities' },
        { url: '/', text: 'Contact' }
    ]
    return (
        <footer>
            <nav>
                {data.map((each, index) => (<Anchor key={index} url={each.url} text={each.text} />))}
                <a className="icon" href="https://www.facebook.com"><i className="bi bi-facebook"></i></a>
                <a className="icon" href="mailto:jessica7rm@gmail.com"><i className="bi bi-envelope"></i></a>
                <a className="icon" href="https://www.instagram.com/jessica7rm/"><i className="bi bi-instagram"></i></a>
            </nav>
        </footer>
    )
}

export default index