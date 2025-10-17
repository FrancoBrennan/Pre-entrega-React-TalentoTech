import React, { useEffect, useState } from 'react'
import './sobre.css'

const SobreNosotros = () => {
  const [reseñas, setReseñas] = useState([])

  useEffect(() => {
    fetch('/data/reseñas.json')
      .then(r => r.json())
      .then(d => setReseñas(d.reseñas || []))
      .catch(err => console.error('Error cargando reseñas:', err))
  }, [])

  return (
    <main className="container-main">
      <section className="sobre-nosotros text-white text-center">
        <img src="/assets/fondo gamer.jpg" alt="Sobre Nosotros GadgetZone" />
        <div className="texto container">
          <h2>Sobre Nosotros</h2>
          <p>En <strong>GadgetZone</strong>, nos apasiona la tecnología y ofrecemos una amplia selección de hardware para computadoras, notebooks, auriculares, mouse, teclados y celulares. Nuestro objetivo es brindarte productos de calidad y un servicio excepcional.</p>
          <p>Con años de experiencia en el sector, estamos aquí para ayudarte a encontrar el hardware perfecto para tus necesidades. ¡Descubre todo lo que tenemos para ofrecerte y mejora tu experiencia tecnológica con nosotros!</p>
        </div>
      </section>

      <section className="reseñas" id="reseñas">
        <h3>Reseñas de Nuestros Clientes</h3>
        <div className="reseñas-contenedor container">
          <div className="row g-3 mt-2">
            {reseñas.map((r, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="item-reseñas-container">
                  <div className="producto-imagen"><img src={r.imagen} alt={r.titulo} /></div>
                  <div className="producto-titulo"><h5>{r.titulo}</h5></div>
                  <div className="producto-estrellas"><p className="estrellas">{r.estrellas}</p></div>
                  <div className="reseña-texto"><p><strong>{r.autor}</strong>: {r.texto}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SobreNosotros
