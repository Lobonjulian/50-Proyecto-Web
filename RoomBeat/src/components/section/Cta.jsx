import Title from "../Part/Title";
import Button from "../Ui/Button";

const Cta = ({ btnTitulo, titulo, subTitulo }) => {
  return (
    <section className="cta">
      <Title titulo={titulo} texto={subTitulo} />
      <Button titulo={btnTitulo} />
    </section>
  );
};

export default Cta;
