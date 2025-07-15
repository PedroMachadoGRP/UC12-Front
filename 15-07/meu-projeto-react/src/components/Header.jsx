import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className='header'>
        <div className='logo'>Coma muito antes que você vire comida</div>
        <nav className='menu'>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
        </nav>
    </header>
  )
}

export default Header