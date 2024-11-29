import IconoComponentes from "../Part/IconComponentes";

const Card = ({ titulo, description, icon }) => {
  return (
    <div className="card">
      <div className="card__title">
        <span className="card__title__span"><IconoComponentes icon={icon}/> </span>
        <h4>{titulo}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
