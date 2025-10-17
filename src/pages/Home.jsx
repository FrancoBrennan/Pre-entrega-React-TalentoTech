import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <main>
        {/* Carrusel Bootstrap (las imágenes deben estar en /public/assets) */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/amd esta (1).jpg" className="d-block w-100" alt="Procesadores AMD" />
            </div>
            <div className="carousel-item">
              <img src="/assets/banner iphone 16.png" className="d-block w-100" alt="iPhone 16" />
            </div>
            <div className="carousel-item">
              <img src="/assets/banner kumara.webp" className="d-block w-100" alt="Kumara" />
            </div>
            <div className="carousel-item">
              <img src="/assets/banner-lenovofinal1.webp" className="d-block w-100" alt="Lenovo" />
            </div>
            <div className="carousel-item">
              <img src="/assets/banner-logitech4.jpg" className="d-block w-100" alt="Logitech" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Categorías */}
        <section className="categorias">
          <h2>Nuestras Categorías</h2>
          <div className="categories-container">
            <Link to="/productos" className="procesadores"><span className="categoria">PROCESADORES</span></Link>
            <Link to="/productos" className="notebooks"><span className="categoria">NOTEBOOKS</span></Link>
            <Link to="/productos" className="auriculares"><span className="categoria">AURICULARES</span></Link>
            <Link to="/productos" className="celulares"><span className="categoria">CELULARES</span></Link>
            <Link to="/productos" className="mouses"><span className="categoria">MOUSES</span></Link>
            <Link to="/productos" className="teclados"><span className="categoria">TECLADOS</span></Link>
            <Link to="/productos" className="tablets"><span className="categoria">TABLETS</span></Link>
          </div>
        </section>

        {/* Info */}
        <section className="informacion">
          <div className="info-container">
            <div className="info">
              <div className="info-icono"><i className="bi bi-credit-card" /></div>
              <div className="info-texto">
                <h5>Hasta 12 cuotas</h5>
                <p>Abonando con tarjetas de crédito</p>
              </div>
            </div>
            <div className="info" id="envios-info">
              <div className="info-icono"><i className="bi bi-truck" /></div>
              <div className="info-texto">
                <h5>Envíos a todo el país</h5>
                <p>A través de Andreani</p>
              </div>
            </div>
            <div className="info">
              <div className="info-icono"><i className="bi bi-shield" /></div>
              <div className="info-texto">
                <h5>Garantía oficial</h5>
                <p>de hasta 24 meses en todos los productos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultas */}
        <section className="consultas">
          <div className="consultas-container">
            <div className="consulta">
              <Link to="/contacto">
                <h6>QUIERO PREGUNTAR</h6>
                <i className="bi bi-chat-dots-fill" />
              </Link>
            </div>
            <div className="consulta">
              <Link to="/contacto">
                <h6>QUIERO QUE ME LLAMEN</h6>
                <i className="bi bi-telephone-fill" />
              </Link>
            </div>
            <div className="consulta">
              <Link to="/contacto">
                <h6>QUIERO SOPORTE TÉCNICO</h6>
                <i className="bi bi-gear-fill" />
              </Link>
            </div>
            <div className="consulta">
              <Link to="/sobre-nosotros#reseñas">
                <h6>RESEÑAS</h6>
                <i className="bi bi-list-stars" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
