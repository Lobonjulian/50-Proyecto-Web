import Logo from "./section/Logo";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="flex flex-col items-center gap-4">
        <section className="flex gap-4 justify-around">
          <div>
          <Logo />
          </div>
          <div>
            <h3>Contacto</h3>
          </div>
          <div>
            <h3>Enlaces</h3>
          </div>
           <div>
            <h3>Newsletter</h3>
           </div> 
           <div>
            <h3>Síguenos</h3>
           </div>
        </section>
        <footer>
          <p>
            © 2024 - {date} Centro Valle del Pacífico. Todos los derechos reservados.
          </p>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
