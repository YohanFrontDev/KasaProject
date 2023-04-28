import React from 'react';
import Logo from './assets/LOGO.png';
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo Kasa"/>
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}
