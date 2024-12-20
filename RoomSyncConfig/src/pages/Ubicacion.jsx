import GoogleMap from "@/components/ui/Part/GoogleMap";
import Hero from "@/components/section/Hero";
import Card from "@/components/ui/Card";
import { LocationData } from "@/data/Datos";

const Ubicacion = () => {
  return (
    <main>
      <Hero
        titulo={"Centro Valle del Pacífico"}
        description={"Yumbo, Valle del Cauca, Colombia"}
        className={
          "bg-[url('@/assets/img/BgUbicacion.webp')] bg-cover flex-wrap"
        }
      />
      <main className="flex gap-4 py-4 max-sm:flex-col">
        <aside>
          <h2>Ubicación</h2>
          <GoogleMap />
          <section>
            <Card datosMap={LocationData[0].ubicacion} />
          </section>
          <section>
            <h2>Transporte</h2>
            <Card datosMap={LocationData[0].transporte} />
          </section>
        </aside>
        <article className="flex flex-col gap-4">
          <section className="bg-slate-300 rounded">
            <h2>Horarios del Evento</h2>
            <Card datosMap={LocationData[0].horario} />
          </section>
          <section className="bg-slate-300 rounded">
            <h2>Hoteles Cercanos</h2>
            <Card datosMap={LocationData[0].hoteles} />
          </section>
        </article>
      </main>
    </main>
  );
};

export default Ubicacion;
