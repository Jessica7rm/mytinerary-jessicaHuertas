import './styles.css'
import HeroCities from '../../components/HeroCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import CardCity from '../../components/CardCity';
import { getAllCities } from '../../service/citiesQueries.js';


const index = () => {
  const [cities, setCities] = useState([]);
  const input = useRef(null);

  useEffect(() => {
    getAllCities().then(setCities)
  }, []);

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    const search = input.current.value;
    let query = `?`;
    if (search) {
      query += "place=" + search;
    }
    getAllCities(query).then(setCities);
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
          {cities.length > 0 ? (
            cities.map((elem) => <CardCity key={elem._id} id={"/city/" + elem._id} image={elem.image} place={elem.place} country={elem.country} />)
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