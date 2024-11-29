import Beneficio from "../components/section/Beneficio";
import Caracteristica from "../components/section/Caracteristica";
import Cta from "../components/section/Cta";
import Hero from "../components/section/Hero";
import { CaracteristicaPage } from "../utils/data";

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
      <Caracteristica
        description={"Una experiencia sonora superior"}
        CaracteristicaData={CaracteristicaPage}
      />
      <Beneficio />
      <section>acciones</section>
      <Cta
        titulo={"¿Listo para revolucionar tu experiencia de audio?"}
        subTitulo={"Únete a la revolución del sonido inteligente."}
        btnTitulo={"Comprar ahora"}
      />
    </main>
  );
};

export default Caracteristicas;
