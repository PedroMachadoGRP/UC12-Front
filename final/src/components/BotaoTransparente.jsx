import React from 'react'
import './BotaoTransparente.css'

function BotaoTransparente(prop) {
  return (
    <button id='trans-btn' className='btn'>
        {prop.tranTexto}
    </button>
  )
}

export default BotaoTransparente