import DataMap from "../Part/DataMap";
import Title from "../Part/Title";

const Caracteristica = ({
  titulo = "Características",
  description,
  CaracteristicaData,
  className = "caracteristica",
}) => {
  return (
    <section className={className}>
      <Title titulo={titulo} texto={description} />

      <DataMap Datos={CaracteristicaData} className={"caracteristica__map"} />
    </section>
  );
};

export default Caracteristica;
