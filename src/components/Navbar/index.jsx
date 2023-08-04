import React from 'react'
import Anchor from '../Anchor'
import iconPerson from '/person-fill.svg'
import './styles.css'

function index() {
    let data = [
        { href: '#', text: 'Home' },
        { href: '/pages/Cities', text: 'Cities' }
    ]
    return (
        <nav>
            <h2>My Tinerary</h2>
            {data.map(each => <Anchor href={each.href} text={each.text} />)}
            <a href="" id="login"><img id="icon" src={iconPerson} />Login</a>
        </nav>
    )
}

export default index