import React from 'react'
import Anchors from './Anchors'
import iconoPersona from '/person-fill.svg'

function Nav() {
let data = [
    {href:'inicio.html',contenido:'Home'},
    {href:'...',contenido:'Cities'}
]
    return (
        <nav>
            <h2>My Tinerary</h2>
            {data.map(each=><Anchors href={each.href} contenido={each.contenido} />)}
            <a href="" id="login"><img id="icon" src={iconoPersona} />Login</a>
        </nav>
    )
}


export default Nav

