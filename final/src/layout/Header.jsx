import React from 'react'
import './Header.css'
import Botao from '../components/botao'

function Header() {
  return (
    <div className='header'>
        <nav>
            <a href="#">Contato</a>
            <a href="#">Sobre</a>
            <a href="#">algo</a>
        </nav>
        <nav>
            <a href="">
                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="" />
            </a>
        </nav>
        <Botao texto = "Clique aqui"/>
    </div>

  )
}

export default Header
