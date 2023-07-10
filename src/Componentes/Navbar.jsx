import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">Logo</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/productos" className="navbar-link">Productos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/colecciones" className="navbar-link">Colecciones</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link">Contacto</Link>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Buscar productos" className="search-input" />
          <button className="search-button">Buscar</button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
