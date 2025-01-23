// src/pages/About.jsx
import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      <section>
        <img
          src="https://via.placeholder.com/1240x300" // Replace with the actual image
          alt="About us"
        />
        <article>
          <h1>About KeyNest</h1>
          <p>
            KeyNest is your trusted partner for finding the perfect accommodations.
            With a wide variety of apartments and homes, we’re here to help you find
            your dream stay.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
