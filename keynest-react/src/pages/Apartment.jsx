// src/pages/Apartment.jsx
import '../styles/accordion.css';
import { useParams } from 'react-router-dom';
import Accordion from '../components/Accordion';
import backArrow from '../assets/arrow_back.png';
import forwardArrow from '../assets/arrow_forward.png';

const Apartment = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Apartment Details - ID: {id}</h1>
      <button>
        <img src={backArrow} alt="Back" />
      </button>
      <Accordion title="Description">
        <p>This is a detailed description of the apartment.</p>
      </Accordion>
      <Accordion title="Amenities">
        <ul>
          <li>Free WiFi</li>
          <li>Fully equipped kitchen</li>
          <li>Air conditioning</li>
        </ul>
      </Accordion>
      <button>
        <img src={forwardArrow} alt="Next" />
      </button>
    </div>
  );
};

export default Apartment;
