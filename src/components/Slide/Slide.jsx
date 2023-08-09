import './styles.css'
import CardHome from '../CardHome'
import Data from '../../Data/data.json'

function Slide({ slide }) {
    let arrList = []

    let arraySelect = () => {
        arrList = Data.slice(slide * 4, (slide + 1) * 4)

    }

    arraySelect()
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {arrList.map((elem) => (<CardHome key={elem.id} src={elem.src} place={elem.place} country={elem.country} />))}
        </div>
    )
}

export default Slide