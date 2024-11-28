import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";

const IconoComponentes = ({ name }) => {
  const Icono = {
    Facebook,
    Instagram,
    Twitter,
    LinkedIn,
  };

  return Icono[name] ? <img src={Icono[name]} alt={`${name} icono}`} /> : null;
};

export default IconoComponentes;
