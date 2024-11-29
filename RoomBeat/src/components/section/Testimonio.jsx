import Title from "../Part/Title";
import Card from "../Ui/Card";

const Testimonio = ({
  titulo = "Testimonio",
  subtitulo = "Lo que dicen nuestros clientes",
  TestimonioData,
}) => {
  return (
    <section>
      <Title titulo={titulo} texto={subtitulo} />
      {TestimonioData.map((testimonio, index) => (
        <div key={index}>
          <Card {...testimonio} />
        </div>
      ))}
    </section>
  );
};

export default Testimonio;
