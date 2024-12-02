import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeat.webp";
import Caracteristica from "../components/section/Caracteristica";
import Testimonio from "../components/section/Testimonio";
import Cta from "../components/section/Cta";
import { CaracteristicaHome, CtaImagen, TestimonioHome } from "../utils/data";

const Home = () => {
  return (
    <main>
      <Hero
        titulo={"Transforma tu hogar con Roombeat"}
        subTitulo={
          "La solución inteligente para gestionar todos los aspectos de tu hogar. Simplifica tu vida y ahorra tiempo con nuestra tecnología innovadora."
        }
        btnTitulo={"Prueba gratis"}
        btn2Titulo={"Ver demo"}
        imagen={HeroImagen}
      />
      <Caracteristica
        className="caractersitica caracteistica--home"
        description={"Todo lo que necesitas para un hogar inteligente"}
        CaracteristicaData={CaracteristicaHome}
      />
      <Testimonio TestimonioData={TestimonioHome} />

      <section className="cta__section">
        <Cta
          titulo={"Descubre el poder de la automatización"}
          subTitulo={
            "Roombeat te permite automatizar todas las tareas rutinarias de tu hogar, desde la iluminación hasta la temperatura, para que puedas centrarte en lo que realmente importa."
          }
          btnTitulo={"Comenzar ahora"}
        />
        <div className="cta__section__imagen">
          {CtaImagen.map((ctaImage, index) => (
            <div className="cta__section__img" key={index}>
              <img src={ctaImage.imagen} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
