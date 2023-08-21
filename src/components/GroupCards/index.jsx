import { useEffect, useState } from 'react';
import CardCity from '../CardCity';
import './styles.css';
import { getAllCities } from '../../service/citiesQueries.js';


const index = () => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        getAllCities()
        .then( data => setCities(data))
        .catch((err) => console.log(err));
    }, []);

return (
    <div className='containerCard'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {cities.map((elem) => (<CardCity key={elem._id} id={"/city/"+ elem._id} image={elem.image} place={elem.place} country={elem.country} />))}
        </div>
    </div>
  );
};

export default index