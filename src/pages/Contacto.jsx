import React, { useState } from 'react'
import './contacto.css'

const Contacto = () => {
  const [form, setForm] = useState({ nombre:'', correo:'', telefono:'', consulta:'', motivo:'Consulta' })
  const [errors, setErrors] = useState({})

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    const errs = {}
    if(!form.nombre.trim()) errs.nombre = 'Por favor, ingrese su nombre.'
    if(!form.correo.trim()) errs.correo = 'Por favor, ingrese su correo.'
    if(!form.telefono.trim()) errs.telefono = 'Por favor, ingrese su teléfono.'
    if(!form.consulta.trim()) errs.consulta = 'Por favor, ingrese su consulta.'
    setErrors(errs)
    if(Object.keys(errs).length===0){
      alert('¡Consulta enviada! (simulación)')
    }
  }

  return (
    <main className="container-main" style={{backgroundImage:'url(/assets/imagen-contacto4.jpg)', backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="container py-4">
        <form className="form-contact" onSubmit={onSubmit}>
          <h4>Contactanos</h4>
          <input className="controls" type="text" name="nombre" placeholder="Ingrese su Nombre" value={form.nombre} onChange={onChange} />
          {errors.nombre && <div className="error-message visible">{errors.nombre}</div>}
          <input className="controls" type="email" name="correo" placeholder="Ingrese su Correo" value={form.correo} onChange={onChange} />
          {errors.correo && <div className="error-message visible">{errors.correo}</div>}
          <input className="controls" type="number" name="telefono" placeholder="Ingrese su Telefono" value={form.telefono} onChange={onChange} />
          {errors.telefono && <div className="error-message visible">{errors.telefono}</div>}
          <textarea className="controls" name="consulta" rows="2" placeholder="Escriba aquí su consulta..." value={form.consulta} onChange={onChange}></textarea>
          {errors.consulta && <div className="error-message visible">{errors.consulta}</div>}
          <select className="controls" name="motivo" value={form.motivo} onChange={onChange}>
            <option>Consulta</option>
            <option>Quiero que me llamen</option>
            <option>Soporte Técnico</option>
          </select>
          <button className="boton" type="submit">Consultar</button>
        </form>

        <section className="contacto">
          <div className="contact-container">
            <div className="contact-item" id="comunicate-con-nosotros">
              <p>Comunicate con nosotros:</p>
              <div className="info"><i className="bi bi-telephone-fill"></i><strong className="phone-number">0810-555-8892</strong></div>
            </div>
            <div className="contact-item">
              <p>Comunicate a nuestro WhatsApp:</p>
              <div className="info"><i className="bi bi-whatsapp"></i><strong className="phone-number">+54 11 3869-1062</strong></div>
            </div>
            <div className="contact-item">
              <div className="schedule-info"><strong>Nuestros horarios de atención son:</strong><p>De <strong>lunes a viernes</strong> de 8 a 18h.</p></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contacto
