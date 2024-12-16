import { HomeData } from "../../utils/Datos";
import Card from "../ui/Card";

const Eventos = () => {
  return (
    <section className="py-5">
      <aside className="flex flex-col items-center gap-8 ">
        <h2 className="text-2xl font-bold">Sobre el Evento</h2>
        <div className="flex items-center">
          <p className="text-gray-600  w-[600px]">
            roomSyncConfig 2024 es el evento más importante para la comunidad de
            RoomBeat. Durante dos días intensivos, tendrás la oportunidad de
            aprender de expertos internacionales, networking con profesionales
            del sector y descubrir las últimas tendencias en tecnología.
          </p>
        </div>
        <button className="bg-black text-white px-1 py-2 rounded">
          Registrarme ahora
        </button>
      </aside>

      <article className="flex flex-col py-10 gap-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Ubicación</h2>
          <p>Centro de Convenciones Valles del Pacifico, Palmira, Colombia</p>
        </div>
        <div>
          <Card datosMap={HomeData} />
        </div>
      </article>
    </section>
  );
};

export default Eventos;
