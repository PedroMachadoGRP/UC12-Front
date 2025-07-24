import React from 'react'
import './Information.css'
import Card from '../components/card'

function Information() {
    return (
        <div id='information'>
            <div id='information-elements'>
                <div id='textos-1'>
                    <h3>Elevate Your Epic Adventures</h3>
                </div>

                <div id='textos-2'>
                    <p>We are a travel agency that specializes in customizing trips according to your preferences, needs, and desires</p>
                </div>

                
                <div className='cards'>
                    <Card image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvaMLLzPHwAv-vBMNb6OEklqzRBLsrye2-A&s' cardNum='01' />
                    <Card image='https://cdn-icons-png.flaticon.com/512/16794/16794610.png' cardNum='02' />
                </div>

                <div className='cards'>
                <Card image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsYELmhC8KqYchD9po3IMxsE54_bOyfKu3Q&s' cardNum='03' />  
                <Card image='https://cdn-icons-png.flaticon.com/512/148/148839.png' cardNum='04' />
                </div>

                <div>
                    <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/exotic-tropical-seascape-with-palm-tree-jetty-pie-2024-10-18-08-01-58-utc.webp" alt="" />
                </div>




            </div>
        </div>
    )
}

export default Information