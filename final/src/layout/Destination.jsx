import React from 'react'
import './Destination.css'
import BotaoTransparente from '../components/BotaoTransparente'

function Destination() {
    return (
        <>

            <div id='destination'>
                <div id='presentation'>
                    <h2>Recommended Destination</h2>
                    <BotaoTransparente  tranTexto="View More"  />
                    
                </div>

                <section id='destinos'>
                    <div className='locals'>
                        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp" alt="" />
                        <h5>Caspian Sea Beach, Aktau</h5>
                        <p>A Unique Seaside Escape in Central Asia</p>
                        <span>📅 12 jun - 20 jun | <span>⭐ 5.0 rating |</span>🏖️ Beach</span>
                        <span className='line'>________________________________________________________________________________________</span>

                        <div>$1,580 <br />
                            <p>9 day package</p>
                        </div>
                        <div id='footer-btn'>
                            <BotaoTransparente tranTexto="Book Now" />
                        </div>

                    </div>


                    <div className='locals'>
                        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/matheen-faiz-OcrTk7qXcdM.webp" alt="" />
                        <h5>Pink Beach, Komodo Island</h5>
                        <p>A Rare Natural Wonder with Blush-Toned Sand</p>
                        <span>📅 12 jun - 20 jun | <span>⭐ 5.0 rating |</span>🏖️ Beach</span>
                        <span className='line'>________________________________________________________________________________________</span>
                        
                        <div>$1,580 <br />
                            <p>9 day package</p>
                        </div>
                        <div id='footer-btn'>
                            <BotaoTransparente tranTexto="Book Now" />
                        </div>
                    </div>

                    <div className='locals'>
                        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/rayyu-maldives-Nbu3v_UDg6w.webp" alt="" />
                        <h5>Tanjung Bira, South Sulawesi</h5>
                        <p>White Sands and Turquoise Waters Away from the Crowds</p>
                        <span>📅 12 jun - 20 jun | <span>⭐ 5.0 rating |</span>🏖️ Beach</span>
                        <span className='line'>________________________________________________________________________________________</span>
                        
                        <div>$1,580 <br />
                            <p>9 day package</p>
                        </div>
                        <div id='footer-btn'>
                            <BotaoTransparente tranTexto="Book Now" />
                        </div>
                    </div>
                </section>

            </div>




        </>

    )
}

export default Destination