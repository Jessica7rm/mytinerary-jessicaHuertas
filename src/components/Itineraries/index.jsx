import React from 'react'
import './styles.css'
import CardItineraries from '../CardItineraries'
import getItinerariesAction from '../../store/actions/itinerariesActions'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItinerariesCity } from '../../service/itinerariesQueries';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {

  const itinerariesInStore = useSelector(store => store.itinerariesReducers.itineraries)

  const dispatch = useDispatch()

  const cityId = useParams();
  console.log(cityId.id, "hola");
  
  useEffect(() => {
    getItinerariesCity(cityId.id).then(res => {
      dispatch(getItinerariesAction.get_itineraries(res))
    })
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div className='containItineraries'>
        {itinerariesInStore.length > 0 ? (                                         
          itinerariesInStore.map((elem) => <CardItineraries key={elem._id} title={elem.title} img={elem.img} name={elem.name} duration={elem.duration} price={elem.price} hashtags={elem.hashtags} idCol={"collapse"+elem._id} />)
        )
          : (
            <div className='noitineraries'>
              <img src="/noTinerary.jpg" alt="No Itineraries" />
              <h3>There are no itineraries</h3>
              <p>Work in progress</p>
            </div>
          )}
      </div>
    </>
  )
}

export default index