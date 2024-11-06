import React from 'react';
import './header.css'; // Optional, for styling
import logo from '../assets/logo.png'; // Import the logo image

const Headerpage = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Headerpage;