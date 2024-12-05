import IconoComponentes from "../Part/IconComponentes";

const Card = ({ name, titulo, description, icon, imagen, information, className= "card" }) => {
  return (
    <div className={className}>
      <div className="card card__title">
        {imagen ? (
          <img src={imagen} alt={name} />
        ) : (
          <span className="card__title__span">
            <IconoComponentes icon={icon} />
          </span>
        )}
        <div>
          <h4>{titulo || name}</h4>
          {information && <p className="card__title__information"> {information} </p>}
        </div>
      </div>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
