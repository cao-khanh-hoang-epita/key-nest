// src/pages/Home.jsx
import '../styles/home-banner.css';
import cabinImage from '../assets/cabin.jpg';
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <h2>Your key to the perfect nest</h2>
        <img src={cabinImage} alt="Banner" />
      </div>
      <section style={{ display: 'flex', gap: '1em', flexWrap: 'wrap', padding: '1em' }}>
        <Card title="Apartment 1" image={img1} />
        <Card title="Apartment 2" image={img2} />
        <Card title="Apartment 3" image={img3} />
      </section>
    </div>
  );
};

export default Home;
