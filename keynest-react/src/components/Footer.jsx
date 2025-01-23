// src/components/Footer.jsx
import '../styles/footer.css';
import footerLogo from '../assets/key-logo-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/">
        <img src={footerLogo} alt="KeyNest Logo Footer" />
      </a>
      <p>© 2025 KeyNest. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
