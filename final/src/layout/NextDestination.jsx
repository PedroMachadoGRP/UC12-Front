import React from 'react';
import './NextDestination.css';

import bannerImg from '../assets/banner.jpg';
import cavendishImg from '../assets/cavendish.jpg';
import altaiImg from '../assets/altai.jpg';
import senggigiImg from '../assets/senggigi.jpg';
import singingImg from '../assets/singing.jpg';

const destinations = [
    {
      country: 'Ecuador',
      flag: 'https://flagcdn.com/w40/ec.png',
      name: 'Cavendish Beach',
      price: '$1,580',
      type: 'Beach',
      rating: 5.0,
      date: '12 Jun - 20 Jun',
      image: cavendishImg,
    },
    {
      country: 'Kazakhstan',
      flag: 'https://flagcdn.com/w40/kz.png',
      name: 'Altai Mountains',
      price: '$1,580',
      type: 'Beach',
      rating: 5.0,
      date: '12 Jun - 20 Jun',
      image: altaiImg,
    },
    {
      country: 'Indonesia',
      flag: 'https://flagcdn.com/w40/id.png',
      name: 'Senggigi Beach',
      price: '$1,580',
      type: 'Beach',
      rating: 5.0,
      date: '12 Jun - 20 Jun',
      image: senggigiImg,
    },
    {
      country: 'Canada',
      flag: 'https://flagcdn.com/w40/ca.png',
      name: 'Singing Sans Beach',
      price: '$1,580',
      type: 'Beach',
      rating: 5.0,
      date: '12 Jun - 20 Jun',
      image: singingImg,
    },
  ];

function NextDestination() {
  return (
    <section className="travel-section">
      <h2 className="travel-heading">
        Uncover The Beauty Of Your<br />Next Destination
      </h2>

      <div className="travel-wrapper">
        <div className="travel-banner">
          <img src={bannerImg} alt="Banner" />
          <div className="travel-banner-text">
            <p>Enjoy The Stunning Natural Beauty That Awaits At Every Destination.</p>
            <button className="view-more-button">View More Destinations</button>
          </div>
        </div>

        <div className="travel-card-container">
          {destinations.map((dest, idx) => (
            <div key={idx} className="travel-card">
              <div className="travel-card-image">
                <img src={dest.image} alt={dest.name} />
                <div className="travel-flag">
                  <img src={dest.flag} alt={dest.country} />
                  <span>{dest.country}</span>
                </div>
              </div>
              <h4 className="travel-card-title">{dest.name}</h4>
              <div className="travel-card-details">
                <span>📅 {dest.date}</span>
                <span>⭐ {dest.rating} Rating</span>
                <span>🏖️ {dest.type}</span>
              </div>
              <div className="travel-card-footer">
                <div>
                  <div className="travel-price">{dest.price}</div>
                  <div className="travel-duration">9 day package</div>
                </div>
                <button className="travel-book-button">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NextDestination;