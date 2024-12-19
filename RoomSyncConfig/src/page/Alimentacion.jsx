import { AlimentacionData } from "@/utils/datos";
import Card from "@/components/ui/Card";
import Form from "@/components/ui/Form";
import GoogleMap from "@/components/Part/GoogleMap";
import Hero from "@/components/section/Hero";
import Titles from "@/components/Part/Titles";

const Alimentacion = () => {
  return (
    <main>
      <Hero
        titulo={"Servicios de Alimentación"}
        description={
          "Descubre nuestra variedad de opciones gastronómicas diseñadas para satisfacer todos los gustos y necesidades dietéticas."
        }
        className={
          "flex-wrap flex-col items-center gap-4 bg-gradient-to-b from-purple-500 via-purple-400  text-white"
        }
      />

      <section>
        <Card datosMap={AlimentacionData[0].comida} />
      </section>

      <section className="p-8 flex flex-col items-center justify-center">
        <Titles
          titulo={"Horarios de Servicio"}
          description={
            "Nuestros servicios están disponibles en los siguientes horarios:"
          }
        />
        <Card datosMap={AlimentacionData[0].horario} />
      </section>
      <section className="p-8 flex flex-col items-center justify-center bg-gray-50">
        <Titles
          titulo={"Restaurantes Cercanos"}
          description={"Explora las opciones gastronómicas en los alrededores"}
        />
        <GoogleMap />
      </section>

      <Form
        titulo={"Contacto"}
        description={"¿Necesitas ayuda con tus requerimientos dietéticos?"}
      />
    </main>
  );
};

export default Alimentacion;
