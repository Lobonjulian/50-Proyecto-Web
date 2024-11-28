import Title from "../Part/Title";

const Card = ({ icon, titulo, description }) => {
  return (
    <div className="card">
      <Title titulo={titulo} texto={description} />
      <img src={icon} />
    </div>
  );
};

export default Card;
