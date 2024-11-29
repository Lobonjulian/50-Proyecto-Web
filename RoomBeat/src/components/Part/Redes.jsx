import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";

import IconoComponentes from "./IconComponentes";

const REDES = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/",
    icon:  Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon:  LinkedIn,
  },
];

const Redes = () => {
  return (
    <div className="redSocial">
      {REDES.map((red) => (
        <a href={red.url} key={red.name}>
         <IconoComponentes icon={red.icon} />
        </a>
      ))}
    </div>
  );
};

export default Redes;
