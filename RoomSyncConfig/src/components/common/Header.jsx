import Logo from "../section/Logo";

const NavLink = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Oradores",
    url: "/oradores",
  },
  {
    name: "Programación",
    url: "/programacion",
  },
  {
    name: "Ubicación",
    url: "/ubicacion",
  },
  {
    name: "Alimentos",
    url: "/alimentos",
  },
  {
    name: "Codigo de Conducta",
    url: "/conducta",
  },
  {
    name: "Contacto",
    url: "/contacto",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-white max-md:flex-col">
      <div>
        <Logo />
      </div>
      <nav className="flex">
        <ul className="flex max-md:text-sm max-md:flex-wrap">
          {NavLink.map((navigation) => (
            <a
              key={navigation.name}
              href={navigation.url}
              className="px-2 py-1 hover:bg-gray-100 rounded-2xl transition duration-300 ease-in-out"
            >
              {navigation.name}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
