import Button from "./Ui/Button";
import Logo from "./Part/Logo";

import "../styles/layauts/header.css";

const Link = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Caracteristicas",
    url: "/caracteristicas",
  },
  {
    name: "Contacto",
    url: "/contacto",
  },
];

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__NavLogo">
          <Logo />
          <nav className="header__nav">
            <ul>
              {Link.map((link) => (
                <li key={link.name}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Button titulo={"Comenzar ahora"} />
      </header>
    </div>
  );
};

export default Header;
