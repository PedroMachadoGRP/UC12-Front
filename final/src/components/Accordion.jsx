import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-container">
      <button className={`accordion-title ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        {title}
        <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
