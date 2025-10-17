import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="footer-info border-bottom">
        <ul className="lista-footer">
          <li><Link to="/productos">PRODUCTOS</Link></li>
          <li><Link to="/sobre-nosotros">SOBRE NOSOTROS</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
        </ul>
      </div>
      <div className="footer-info text-center">
        <h5>Seguinos en</h5>
        <div className="redes-sociales">
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter-x"></i></a>
        </div>
      </div>
      <div className="copyright text-center py-3">
        <p>&copy;Copyright 2024</p>
      </div>
    </footer>
  )
}

export default Footer
