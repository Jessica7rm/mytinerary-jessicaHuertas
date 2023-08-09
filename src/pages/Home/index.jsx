import React from 'react'
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

function index() {
    return (
        <>
        <main>
            <Hero />
            <Carousel />
        </main>
       </> 
    )
}

export default index