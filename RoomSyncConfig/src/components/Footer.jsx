import Logo from "./section/Logo";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="py-4 flex flex-col items-center gap-4">
        <section className="flex gap-4 justify-around">
          <div className="flex flex-col">
            <Logo />
            <p>
              El mejor centro de convenciones en Valle del Cauca para tus
              eventos.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Contacto</h3>
            <p>info@centrovalle.co</p>
            <p>+57 2 123 4567</p>
            <p>Palmira, Valle del Cauca, Colombia</p>
          </div>
          <div>
            <h3 className="font-bold">Enlaces</h3>
            <ul>
              <li>Inicio</li>
              <li>Servicio</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Newsletter</h3>
            <p>Suscríbete para recibir las últimas novedades</p>
            <form>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="border border-gray-300 px-2 py-1 rounded"
              />
              <button className="bg-black text-white px-1 py-2 rounded">
                Suscribirse{" "}
              </button>
            </form>
          </div>
          <div>
            <h3>Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank">
                facebook
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                instagram
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                twitter
              </a>
            </div>
          </div>
        </section>
        <footer className="py-2">
          <p>
            © 2024 - {date} Centro Valle del Pacífico. Todos los derechos
            reservados.
          </p>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
