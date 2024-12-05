import Title from "../Part/Title";
import DataMap from "../Part/DataMap";

const Beneficio = ({ titulo, texto, BeneficioData }) => {
  return (
    <section className="beneficios">
      <Title titulo={titulo} texto={texto} />
      <DataMap className="beneficio__data" Datos={BeneficioData} />
    </section>
  );
};

export default Beneficio;
