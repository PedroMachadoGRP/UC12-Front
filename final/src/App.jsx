import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Banner from './layout/Banner'
import Destination from './layout/Destination'
import Information from './layout/Information'
import Experiences from './layout/Experiences'
import NextDestination from './layout/NextDestination'


function App() {
  

  return (
    <>
    <Header/>
    <Banner/>
    <Destination/>
    <Information/>
    <Experiences/>
    <NextDestination/>
    </>
  )
}

export default App
