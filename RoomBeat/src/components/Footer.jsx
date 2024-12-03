import Logo from "./Part/Logo";
import Redes from "./Part/redes";

import "../styles/layouts/footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <section className="footer__info">
        <section className="footer footer__info__logo">
          <Logo />
          <p>Haciendo tu hogar más inteligente, un dispositivo a la vez.</p>
          <Redes />
        </section>
        <section className="footer footer__info__logo footer__info__links">
          <div className="footer footer__info__logo  footer__info__links__listas">
            <h3>Soluciones</h3>
            <ul>
              <li>Marketing</li>
              <li>Analisis</li>
              <li>Comercio</li>
            </ul>
          </div>

          <div className="footer footer__info__logo  footer__info__links__listas">
            <h3>Soporte</h3>
            <ul>
              <li>Precios</li>
              <li>Guías</li>
              <li>Proveedores</li>
            </ul>
          </div>
        </section>
      </section>

      <footer className="footer__info footer__legal">
        <p>© 2023 -{date} Roombeat. Todos los derechos reservados.</p>
      </footer>
    </footer>
  );
};

export default Footer;
