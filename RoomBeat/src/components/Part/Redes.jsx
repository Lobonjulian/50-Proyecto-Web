import IconoComponentes from "./IconComponentes";

const REDES = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
];

const Redes = () => {
  return (
    <div className="redSocial">
      {REDES.map((red) => (
        <a href={red.url} key={red.name}>
         <IconoComponentes name={red.name} />
        </a>
      ))}
    </div>
  );
};

export default Redes;
