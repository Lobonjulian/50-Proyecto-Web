import Title from "../Part/Title";
import Card from "../Ui/Card";

import "../../styles/section.css";

const Caracteristica = ({
  titulo = "Características",
  description,
  CaracteristicaData,
  className="caracteristica",
}) => {
  return (
    <section className={className}>
      <Title titulo={titulo} texto={description} />
      <div className="caracteristica__card">
        {CaracteristicaData.map((caracteristica, index) => (
          <div key={index}>
            <Card {...caracteristica} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Caracteristica;
