import React, { useEffect, useState } from 'react'
import './productos.css'
import { useCart } from '../hooks/useCart.js'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const { addToCart, getQuantity } = useCart()

  useEffect(() => {
    fetch('/data/productos.json')
      .then(r => r.json())
      .then(setProductos)
      .catch(err => console.error('Error cargando productos:', err))
  }, [])

  return (
    <main className="container-main container py-4">
      <h2 className="text-center my-4 p-2 border">Nuestros Productos</h2>
      <div className="row g-3">
        {productos.map(p => (
          <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
            <div className="card h-100">
              <div className="card-img p-2">
                <img src={p.imagen} className="w-100" style={{height:'30vh', objectFit:'contain'}} alt={p.nombre} />
              </div>
              <div className="card-body d-flex flex-column">
                <h4 className="fs-6 text-center mb-4">{p.nombre}</h4>
                <div className="mt-auto d-flex align-items-center justify-content-between">
                  <b className="fs-5">${p.precio.toLocaleString()}</b>
                  <button className="btn btn-info text-white" onClick={() => addToCart(p)}>
                    <i className="bi bi-cart3 me-1"></i>
                    {getQuantity(p.id) ? <span className="badge bg-dark">{getQuantity(p.id)}</span> : 'Agregar'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Productos
