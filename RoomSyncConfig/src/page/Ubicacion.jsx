import GoogleMap from "@/components/Part/GoogleMap";
import Hero from "@/components/section/Hero";
import Card from "@/components/ui/Card";
import { UbicacionData } from "@/utils/datos";

const Ubicacion = () => {
  return (
    <main>
      <Hero
        titulo={"Centro Valle del Pacífico"}
        description={"Palmira, Valle del Cauca, Colombia"}
        className={
          "bg-[url('@/assets/img/BgUbicacion.webp')] bg-cover flex-wrap"
        }
      />
      <main className="flex gap-4 py-4">
        <aside>
          <h2>Ubicacion</h2>
          <GoogleMap />
          <section>
            <Card datosMap={UbicacionData[0].ubicacion} />
          </section>
          <section>
            <h2>Transporte</h2>
            <Card datosMap={UbicacionData[0].transporte} />
          </section>
        </aside>
        <article className="flex flex-col gap-4">
          <section className="bg-slate-300 rounded">
            <h2>Horarios del Evento</h2>
            <Card datosMap={UbicacionData[0].horario} />
          </section>
          <section className="bg-slate-300 rounded">
            <h2>Hoteles Cercanos</h2>
            <Card datosMap={UbicacionData[0].hoteles} />
          </section>
        </article>
      </main>
    </main>
  );
};

export default Ubicacion;
