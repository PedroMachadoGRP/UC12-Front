import React from 'react'
import './FAQ.css'
import Accordion from '../components/Accordion'


function FAQ() {
  return (
    <>
    <div id='faq-header'>
        <h3>Frequently Asked Questions</h3>
        <p>From quick answers to in-depth guidance, we’re committed to making sure you feel confident</p>
    </div>

    <div id='accordion'>
        <Accordion title={'What services does your travel agency offer?'} children={"We offer a wide range of travel services, including flight bookings, hotel reservations, holiday packages, customized itineraries, visa assistance, travel insurance, and tour arrangements for both domestic and international destinations."}/>
        <Accordion title={'Can I customize my travel package?'} children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <Accordion  title={'Do you offer travel insurance?'} children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <Accordion title={'What happens if my flight is delayed or canceled?'} children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <Accordion title={'How do I make a booking?'} children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        <Accordion title={'Do I need to pay in full at the time of booking?'} children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <Accordion title={'Can I cancel or reschedule my trip?'} children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
    </div>
    </>
  )
}

export default FAQ