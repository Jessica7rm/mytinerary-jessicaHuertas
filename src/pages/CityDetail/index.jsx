import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { getCity } from '../../service/citiesQueries'
import { useParams } from 'react-router-dom'
import Itineraries from '../../components/Itineraries'
import { useDispatch, useSelector } from 'react-redux';
import getCitiesAction from '../../store/actions/citiesActions';

const index = () => {
 // const [city, setCity] = useState({});
  
  let cityInStore = useSelector(store => store.citiesReducers.oneCity)

  const dispatch = useDispatch()

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCity(id)
      .then(resp =>{
        dispatch(getCitiesAction.get_city(resp))
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <main>
      <div className="card cardDet text-bg-dark">
        <img src={cityInStore.image} className="card-img" alt={cityInStore.place} />
        <div className="card-img-overlay">
          <h5 className="card-title titleDet"><i className="bi bi-geo-alt"></i>{cityInStore.place}, {cityInStore.country}</h5>
          <a href="/cities" className="btn btn-secondary">View Itineraries</a>
        </div>
      </div>
      <div className="card-body cardDet">
        <p className="card-text">{cityInStore.description}</p>
      </div>
      <>
        <Itineraries cityId={cityInStore._id}/>
      </>
    </main>
  )
}

export default index