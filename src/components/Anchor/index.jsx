import React from 'react'
import './styles.css'

function index({ href, text }) {
    return (
        <>
            <a href={href}>{text}</a>
        </>
    )
}

export default index