import React from 'react'
import './Card.css'


function Card(prop) {
  return (
    <>
    <div id='card'>
      <div id='image'>
        <img src = {prop.image}/>
        <p>{prop.cardNum}</p>
      </div>
      <div id='info'>
        <h5>
        Diving and Snorkeling
        </h5>
        <p>
        The travel package includes lending services for diving and snorkeling equipment
        </p>
      </div>
    </div>
    </>
  )
}

export default Card