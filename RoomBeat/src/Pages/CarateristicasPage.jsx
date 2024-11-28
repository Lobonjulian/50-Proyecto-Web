import Caracteristica from "../components/section/Caracteristica";
import Hero from "../components/section/Hero";

const Caracteristicas = () => {
  return (
    <main>
      <Hero
        titulo={"Características de Roombeat"}
        subTitulo={
          "Descubre la nueva era del sonido inteligente con Roombeat. Un altavoz revolucionario que combina calidad de audio excepcional con tecnología intuitiva para transformar cualquier espacio en una experiencia sonora inmersiva. "
        }
        btnTitulo={"Comprar ahorra"}
      />
      <Caracteristica description={"Una experiencia sonora superior"}/>
    </main>
  );
};

export default Caracteristicas;
