import React from 'react'
import './Botao.css'


function Botao(prop) {
  return (
    <button id='orange-btn'>
    {prop.texto}
    </button>
  )
}

export default Botao
