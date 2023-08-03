import React from 'react'

function Anchors({href,contenido}) {
  return (
    <>
      <a href={href}>{contenido}</a>
    </>
  )
}


export default Anchors