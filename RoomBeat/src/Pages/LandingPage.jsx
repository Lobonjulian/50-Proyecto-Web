import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeatLanding.webp";
import Beneficio from "../components/section/Beneficio";
import Form from "../components/section/Form";
import Testimonio from "../components/section/Testimonio";
import FQA from "../components/section/FQA";

const Landing = () => {
  return (
    <main>
      <Hero
        titulo={"Transforma tu hogar con Roombeat"}
        subTitulo={
          "La solución inteligente que revoluciona la forma en que vives. Control total de tu hogar desde cualquier lugar, en cualquier momento. "
        }
        btnTitulo={"Comienza Ahora"}
        imagen={HeroImagen}
      />
      <Beneficio />
      <Form />
      <Testimonio />
      <FQA />
    </main>
  );
};

export default Landing;
