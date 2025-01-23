// src/components/Card.jsx
import '../styles/card.css'; // Import the associated styles

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
