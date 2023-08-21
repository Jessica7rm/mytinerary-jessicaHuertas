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
      <form className="d-flex gap-3 search" onSubmit={handleSumit}>
        <input type="text" placeholder="Search" ref={input} />
        <button className="btn btn-secondary"><i className="bi bi-search-heart"></i></button>
      </form>
      <div className='containerCard'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {cities.map((elem) => (<CardCity key={elem._id} id={"/city/" + elem._id} image={elem.image} place={elem.place} country={elem.country} />))}
        </div>
      </div>
    </main>
  )
}

export default index