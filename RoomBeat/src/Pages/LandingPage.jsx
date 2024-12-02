import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeatLanding.webp";
import Beneficio from "../components/section/Beneficio";
import Form from "../components/section/Form";
import Testimonio from "../components/section/Testimonio";
import FQA from "../components/section/FQA";
import { BeneficioLanding, TestimonioLanding } from "../utils/data";

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
      <Beneficio titulo={"Beneficios Principales"} texto={"Descubre por qué Roombeat es la elección perfecta para tu hogar inteligente "} BeneficioData={BeneficioLanding} />
      <Form /> 
      <Testimonio TestimonioData={TestimonioLanding}/>
      <FQA />
    </main>
  );
};

export default Landing;
