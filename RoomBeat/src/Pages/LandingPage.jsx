import Hero from "../components/section/Hero";
import HeroImagen from "../assets/img/HeroRoomBeatLanding.webp";

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
    </main>
  );
};

export default Landing;
