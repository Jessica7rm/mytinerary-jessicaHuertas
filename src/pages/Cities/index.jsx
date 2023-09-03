import './styles.css'
import HeroCities from '../../components/HeroCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from 'react';
import CardCity from '../../components/CardCity';
import { getAllCities } from '../../service/citiesQueries.js';
import { useDispatch, useSelector } from 'react-redux';
import getCitiesAction from '../../store/actions/citiesActions';


const index = () => {
 // const [cities, setCities] = useState([]);
  const input = useRef(null);

  let citiesInStore = useSelector(store => store.citiesReducers.cities)
  console.log(citiesInStore);

  const dispatch = useDispatch()

  useEffect(() => {
    getAllCities().then(data => {
      dispatch(getCitiesAction.get_cities(data))
    })
    .catch(err => console.log(err))
  }, []);

  const handleSumit = () => {
    const search = input.current.value;
    let query = `?`;
    if (search) {
      query += "place=" + search;
    }
    getAllCities(query).then(data =>{
      dispatch(getCitiesAction.get_cities(data))
    })
  };

  return (
    <main>
      <div className="containerCity">
        <HeroCities />
      </div>
      <form className="row g-3 search" onChange={handleSumit}>
        <input type="text" className="col-auto" placeholder="Search your city " ref={input} />

      </form>
      <div className='containerCard'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {citiesInStore.length > 0 ? (
            citiesInStore.map((elem) => <CardCity key={elem._id} id={"/city/" + elem._id} image={elem.image} place={elem.place} country={elem.country} />)
          )
            : (
              <div className='not'>
                <h2 >We don't have that itinerary.</h2>
                <h3> Try another city !</h3>
                <img src="/noTinerary.jpg" alt="No Itineraries" />
              </div>
            )}
        </div>
      </div>
    </main>
  )
}

export default index