import DataMap from "../components/Part/DataMap";
import Title from "../components/Part/Title";
import Beneficio from "../components/section/Beneficio";
import Caracteristica from "../components/section/Caracteristica";
import Cta from "../components/section/Cta";
import Hero from "../components/section/Hero";

import {
  Acciones,
  BeneficioCaracteristica,
  CaracteristicaPage,
} from "../utils/data";

const Caracteristicas = () => {
  return (
    <main>
      <Hero
        titulo={"Características de Roombeat"}
        subTitulo={
          "Descubre la nueva era del sonido inteligente con Roombeat. Un altavoz revolucionario que combina calidad de audio excepcional con tecnología intuitiva para transformar cualquier espacio en una experiencia sonora inmersiva. "
        }
        btnTitulo={"Comprar ahorra"}
        className="hero hero--caracteristica"
      />

      <Caracteristica
        className="caracteristica caracteristica--page"
        description={"Una experiencia sonora superior"}
        CaracteristicaData={CaracteristicaPage}
      />

      <Beneficio
        titulo={"Beneficios Clave"}
        BeneficioData={BeneficioCaracteristica}
      />

      <section className="acciones">
        <Title
          titulo={"Roombeat en acción"}
          texto={"Descubre cómo Roombeat transforma tu experiencia de audio"}
        />

        <DataMap Datos={Acciones} className="acciones__data" />
      </section>
      
        <Cta
          titulo={"¿Listo para revolucionar tu experiencia de audio?"}
          subTitulo={"Únete a la revolución del sonido inteligente."}
          btnTitulo={"Comprar ahora"}
          className="cta cta--caracteristica"
        />
    </main>
  );
};

export default Caracteristicas;
