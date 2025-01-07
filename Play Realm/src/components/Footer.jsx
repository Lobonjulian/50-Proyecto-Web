const FooterDatos = [
  {
    title: "Sobre Nosotros",
    name: ["Quienes Somos", "Contacto", "Trabaja con Nosotros"],
  },
  {
    title: "Ayuda",
    name: ["Centro de Ayuda", "Envio", "Devoluciones"],
  },
  {
    title: "Políticas",
    name: ["Privacidad", "Terminos y condiciones", "Cookies"],
  },
  {
    title: "Metodos de pago",
    name: ["Visa", "Mastercard", "PayPal"],
  },
];

const Footer = () => {
  return (
    <footer>
      <section className="footer__politics">
        <div className="footer__politics__div">
          {FooterDatos.map((item) => {
            return (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <ul>
                  {item.name.map((name) => {
                    return <li key={name}>{name}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <section className="footer__derechos">
        <p>
          2024 - {new Date().getFullYear()} Play Realm.Todos los derechos
          reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
