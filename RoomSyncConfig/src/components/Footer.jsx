import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Logo from "./section/Logo";

const Link = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Servicio",
    url: "/servicio",
  },
  {
    name: "Contacto",
    url: "/contacto",
  },
];

const Icon = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    imagen: <FaFacebookF />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    imagen: <FaInstagram />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    imagen: <FaXTwitter />,
  },
];

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="p-4  flex flex-col  items-center gap-4">
      <section className="flex gap-4 justify-between w-full flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-pretty">
            El mejor centro de convenciones en Valle del Cauca para tus eventos.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Contacto</h3>
          <p>info@centrovalle.co</p>
          <p>+57 2 123 4567</p>
          <p>Palmira, Valle del Cauca, Colombia</p>
        </div>
        <div>
          <h3 className="font-bold">Enlaces</h3>
          <ul>
            {Link.map((link) => {
              return (
                <li key={link.name}>
                  <a href={link.url}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Newsletter</h3>
          <p>Suscríbete para recibir las últimas novedades</p>
          <form className="flex gap-2 flex-wrap">
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
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Síguenos</h3>
          <div className="flex gap-4 items-center">
            {Icon.map((icon) => {
              return (
                <a
                  href={icon.url}
                  key={icon.name}
                  className="text-xl text-violet-500 hover:text-teal-100 hover:bg-black rounded-full p-1"
                >
                  {icon.imagen}
                </a>
              );
            })}
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
  );
};

export default Footer;
