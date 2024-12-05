import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeatLanding.webp";
import FormImagen from "../assets/img/Tablero.webp";
import Beneficio from "../components/section/Beneficio";
import Form from "../components/section/Form";
import Testimonio from "../components/section/Testimonio";
import Pqr from "../components/section/Pqr";
import { BeneficioLanding, TestimonioLanding } from "../utils/data";
import Title from "../components/Part/Title";

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
      <Beneficio
        titulo={"Beneficios Principales"}
        texto={
          "Descubre por qué Roombeat es la elección perfecta para tu hogar inteligente "
        }
        BeneficioData={BeneficioLanding}
      />

      <section className="formulario">
        <div className="formulario formulario__section">
          <Title
            titulo={"Prueba Roombeat Gratis"}
            texto={
              "Regístrate ahora y obtén 30 días de prueba gratuita. Sin compromisos, sin tarjeta de crédito."
            }
          />
          <Form isLandingPage={true} />
        </div>
        <img src={FormImagen} loading="lazy" />
      </section>

      <Testimonio TestimonioData={TestimonioLanding} />
      <Pqr />
    </main>
  );
};

export default Landing;
