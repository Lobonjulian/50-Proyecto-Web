import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeat.webp";
import Caracteristica from "../components/section/Caracteristica";

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
      <Caracteristica description={"Todo lo que necesitas para un hogar inteligente"} />
    </main>
  );
};

export default Home;
