import Logo from "/logo.svg";
const LinkNav = [
  { name: "Inicio", url: "/" },
  { name: "Videojuego", url: "/videojuego" },
  { name: "Merchandising", url: "/merchandising" },
  { name: "Colecciones", url: "/coleciones" },
];

const Header = () => {
  return (
    <header>
      <div className="logo__list">
        <a href="/" rel="noreferrer">
          <img src={Logo} alt="Logo" />
          <span translate="no">Play Realm</span>
        </a>
        <div>
            <nav>
          {
              LinkNav.map((link) => 
              (
                    <a key={link.name} href={link.url}>{link.name}</a>
                )
              )
          }
            </nav>
        </div>
      </div>
      <div className="Busqueda">
        <input type="text" placeholder="Buscar" />
        <button>Carrito</button>
      </div>
    </header>
  );
};

export default Header;
