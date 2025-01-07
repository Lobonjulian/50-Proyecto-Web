const Card = ({ imagen, title, description, price }) => {
  return (
    <div className="Card">
      {imagen && <img src={imagen} alt={title} />}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {price && (
          <div>
            <p>{price}</p>
            <button>Añadir al Carrito</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
