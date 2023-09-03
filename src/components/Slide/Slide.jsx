import './styles.css'
import CardHome from '../CardHome'
// import Data from '../../Data/data.json'
import { useEffect } from 'react';
import { getAllCities } from '../../service/citiesQueries.js';
import { useDispatch, useSelector } from 'react-redux'
import getCitiesAction from '../../store/actions/citiesActions';


function Slide({ slide }) {

    let citiesInStore = useSelector(store => store.citiesReducers.cities)
    const dispatch = useDispatch()

    useEffect(() => {
        getAllCities().then(data => {
          dispatch(getCitiesAction.get_cities(data))
        })
        .catch(err => console.log(err))
      }, [slide]);

    let arrList = []

    let arraySelect = () => {
        arrList = citiesInStore?.slice(slide * 4, (slide + 1) * 4)

    }

    arraySelect()
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2  g-4">
            {arrList.map((elem) => (<CardHome key={elem._id} src={elem.image} place={elem.place} country={elem.country} />))}
        </div>
    )
}

export default Slide