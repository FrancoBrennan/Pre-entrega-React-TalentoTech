import React from 'react'
import './carrito.css'
import { useCart } from '../hooks/useCart.js'
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { items, increment, decrement, removeItem, total } = useCart()

  return (
    <main className="container-main container py-4">
      <div className="container-todo">
        <div className="container-productos">
          <div className="titulo"><h2>Productos</h2></div>
          {items.length === 0 ? (
            <div className="contenedor-no-productos text-center">
              <p className="titulo-no-productos">No hay elementos en el carrito</p>
              <Link to="/productos" className="btn btn-danger">Seguir comprando</Link>
            </div>
          ) : (
            items.map(prod => (
              <div className="product" key={prod.id}>
                <div className="product-img">
                  <img src={prod.imagen} alt={prod.nombre} />
                </div>
                <div className="product-details">
                  <p>{prod.nombre}</p>
                </div>
                <div className="product-quantity">
                  <button className="btn-decrement" onClick={() => decrement(prod.id)}>−</button>
                  <span className="quantity">{prod.cantidad}</span>
                  <button className="btn-increment" onClick={() => increment(prod.id)}>+</button>
                </div>
                <div className="product-precio">
                  <p className="price">$ {prod.precio.toLocaleString()}</p>
                </div>
                <div className="product-delete">
                  <button className="btn-delete" onClick={() => removeItem(prod.id)}><i className="bi bi-trash3-fill"></i></button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="subtotal"><p>Subtotal: <span id="total-price">$ {total.toLocaleString()}</span></p></div>

        <div className="container-envio">
          <div className="titulo"><h2>Envío</h2></div>
          <div className="shipping">
            <div className="postal-code">
              <input type="text" placeholder="Código postal" />
              <span className="icon"><i className="bi bi-truck"></i></span>
            </div>
            <p className="postal-message">Ingresá tu código postal para calcular el costo de envío.</p>
          </div>
          <div className="contenedor-continuar">
            <button className="continuar">Continuar</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Carrito
