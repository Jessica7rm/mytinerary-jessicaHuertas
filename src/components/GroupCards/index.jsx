import React from 'react'
import CardCity from '../CardCity'
import Data from '../../Data/data.json'
import './styles.css'


function index() {
    return (
        <div className='containerCard'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {Data.map((elem) => (<CardCity key={elem.id} src={elem.src} place={elem.place} country={elem.country} />))}
            </div>
        </div>

    )
}

export default index