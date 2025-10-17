import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'

const Header = () => {
  const { totalItems } = useCart()

  return (
    <header className="header-dark py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src="/assets/logo.png" alt="GadgetZone Logo" className="logo" />
        </Link>

        <nav className="d-none d-md-flex gap-3 align-items-center">
          <NavLink className="nav-link" to="/">Inicio</NavLink>
          <NavLink className="nav-link" to="/productos">Productos</NavLink>
          <NavLink className="nav-link" to="/sobre-nosotros">Sobre Nosotros</NavLink>
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
        </nav>

        <Link to="/carrito" className="position-relative text-white">
          <i className="bi bi-cart3 fs-3"></i>
          {totalItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-cart">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header
