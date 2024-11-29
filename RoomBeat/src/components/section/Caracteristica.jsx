import Title from "../Part/Title";
import Card from "../Ui/Card";

import "../../styles/section.css";

const Caracteristica = ({
  titulo = "Caracteristicas",
  description,
  CaracteristicaData,
}) => {
  return (
    <section className="caracteristica">
      <Title titulo={titulo} texto={description} />

      {CaracteristicaData.map((caracteristica, index) => (
        <div key={index}>
          <Card {...caracteristica} />
        </div>
      ))}
    </section>
  );
};

export default Caracteristica;
