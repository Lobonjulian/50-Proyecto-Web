const IconoComponentes = ({ icon }) => {
  return icon ? <img src={icon} alt={`${icon} icono`} loading="lazy" /> : null;
};

export default IconoComponentes;
