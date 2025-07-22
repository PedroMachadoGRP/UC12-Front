import React from 'react'
import './Header.css'
import Botao from '../components/botao'
import BotaoTransparente from '../components/BotaoTransparente'

function Header() {
  return (
    <div className='header'>
      <nav>
        <a href="#">Home</a>
        <a href="#">Page</a>
        <a href="#">Package</a>
        <a href="#">Destination</a>
      </nav>
          <img id='imagem' src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="" />
          <div id='botoes'>
          <BotaoTransparente tranTexto = "Blog"/>
          <Botao texto="Contact"/>
          </div>
    </div>

  )
}

export default Header
