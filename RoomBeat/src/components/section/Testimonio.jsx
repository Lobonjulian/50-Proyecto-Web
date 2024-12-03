import DataMap from "../Part/DataMap";
import Title from "../Part/Title";

const Testimonio = ({
  titulo = "Testimonio",
  subtitulo = "Lo que dicen nuestros clientes",
  TestimonioData,
}) => {
  return (
    <section className="testimonio">
      <Title titulo={titulo} texto={subtitulo} />
      
      <DataMap Datos={TestimonioData} className={"testimonio__map"} classCard={"card--testimonio"} />
    </section>
  );
};

export default Testimonio;
