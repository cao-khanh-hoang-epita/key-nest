// src/components/Header.jsx
import '../styles/header.css';
import logo from '../assets/key-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="/" className="header-logo">
          <img src={logo} alt="KeyNest Logo" />
        </a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
