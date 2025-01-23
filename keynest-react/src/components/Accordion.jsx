// src/components/Accordion.jsx
import '../styles/accordion.css'; // Import the associated styles
import { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-about ${isOpen ? 'active' : ''}`}>
      <div
        className="accordion-about-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
      </div>
      <div className="accordion-about-body">
        {children}
      </div>
    </div>
  );
};

export default Accordion;
