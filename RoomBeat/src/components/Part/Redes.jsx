const REDES = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icono: "fa-brands fa-facebook",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icono: "fa-brands fa-instagram",
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    icono: "fa-brands fa-twitter",
  },
];

const Redes = () => {
  return (
    <div>
      {REDES.map((red) => (
        <a href={red.url} key={red.name}>
          <i className={red.icono}></i>
        </a>
      ))}
    </div>
  );
};

export default Redes;
