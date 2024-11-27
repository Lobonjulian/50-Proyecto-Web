import Logo from "./Part/Logo";
import Redes from "./Part/redes";

import "../styles/layauts/footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <section className="footer__info">
        <section className="footer__info__logo">
          <Logo />
          <p>Haciendo tu hogar más inteligente, un dispositivo a la vez.</p>
          <Redes />
        </section>
        <section className="footer__info__links">
          <div className="footer__info__links__soluciones">
            <h3>Soluciones</h3>
            <ul>
              <li>Marketing</li>
              <li>Analisis</li>
              <li>Comercio</li>
            </ul>
          </div>

          <div className="footer__info__links__soporte">
            <h3>Soporte</h3>
            <ul>
              <li>Precios</li>
              <li>Guias</li>
              <li>Proveedores</li>
            </ul>
          </div>
        </section>
      </section>

      <footer className="footer__legal">
        <p>© 2023 -{date} Roombeat. Todos los derechos reservados.</p>
      </footer>
    </footer>
  );
};

export default Footer;
