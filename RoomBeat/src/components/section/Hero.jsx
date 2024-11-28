import Title from "../Part/Title";
import Button from "../Ui/Button";
import "../../styles/section.css";

const Hero = ({ titulo, subTitulo, btnTitulo, btn2Titulo, imagen }) => {
  return (
    <section className="hero">
      <div className="hero__title">
        <Title titulo={titulo} texto={subTitulo} />
       
        <div className="hero__title__btn">
          <Button titulo={btnTitulo} />
          {btn2Titulo && <Button titulo={btn2Titulo} />}
        </div>
      </div>
      <div className="hero__imagen">
        <img src={imagen} alt="hero Imagen" />
      </div>
    </section>
  );
};

export default Hero;
