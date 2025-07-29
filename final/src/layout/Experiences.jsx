import React from 'react'
import './Experiences.css'
import Botao from '../components/Botao'
import Carousel from '../components/Carousel'

function Experiences() {
  return (
    <div id='experiences'>
        <div id='header'>
            <h2>Where Comfort Meets <br />  Convenience — Our Top Stay <br />  Picks for You</h2>
            <Botao texto='Book Now' />
        </div>

      <div id='carrosel'>
        <Carousel/>
      </div>
    
   
        
    </div>
  )
}

export default Experiences