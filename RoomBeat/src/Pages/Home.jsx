import { CaracteristicaHome, CtaImagen, TestimonioHome } from "../utils/data";
import Caracteristica from "../components/section/Caracteristica";
import Cta from "../components/section/Cta";
import DataMap from "../components/Part/DataMap";
import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeat.webp";
import Testimonio from "../components/section/Testimonio";

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
        className="caracteristica caracteristica--home"
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
        <DataMap Datos={CtaImagen} className={"cta__section__img"} />
      </section>
    </main>
  );
};

export default Home;
