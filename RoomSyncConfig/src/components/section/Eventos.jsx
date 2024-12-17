import { HomeData } from "../../utils/datos";

const Eventos = () => {
  return (
    <section className="py-5 bg-slate-200">
      <article className="flex flex-col py-10 gap-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Ubicación</h2>
          <p>Centro de Convenciones Valles del Pacifico, Palmira, Colombia</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Ubicación</h2>
          <article className="flex gap-4 flex-wrap">
            {HomeData[1].ubicacion.map((ubicacion) => (
              <div
                className="flex flex-col gap-4  bg-white rounded p-4"
                key={ubicacion.id}
              >
                <h4 className="font-bold">{ubicacion.name}</h4>
                {ubicacion.medios.map((medio) => (
                  <div key={medio.name}>
                    <h5 className="font-semibold">{medio.name}</h5>
                    {typeof medio.description === "object" ? (
                      <>
                        <p>{medio.description.p1}</p>
                        <p className="text-gray-500">{medio.description.p2}</p>
                      </>
                    ) : (
                      <p>{medio.description}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </article>
        </div>
      </article>

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
        <button className="bg-violet-500 text-white px-1 py-2 rounded">
          Registrarme ahora
        </button>
      </aside>
    </section>
  );
};

export default Eventos;
