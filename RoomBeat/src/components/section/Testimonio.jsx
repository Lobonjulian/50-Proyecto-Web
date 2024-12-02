import Title from "../Part/Title";
import Card from "../Ui/Card";

const Testimonio = ({
  titulo = "Testimonio",
  subtitulo = "Lo que dicen nuestros clientes",
  TestimonioData,
}) => {
  return (
    <section className="testimonio">
      <Title titulo={titulo} texto={subtitulo} />
      <div className="testimonio__cards">
      {TestimonioData.map((testimonio, index) => (
        <div className="testimonio__card" key={index}>
          <Card className="card card--testimonio" {...testimonio} />
        </div>
      ))}
      </div>
    </section>
  );
};

export default Testimonio;
