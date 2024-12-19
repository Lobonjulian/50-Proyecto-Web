import Titles from "@/components/Part/Titles";

const NavDias = ["Jueves", "Viernes", "Sabado", "Domingo"];

const Intinerario = () => {
  return (
    <main className="bg-slate-200">
      <Titles
        titulo={"RoomSyncConfig 2024"}
        description={"15-18 de Marzo 2024"}
        classNameEtiqueta={"font-bold text-center text-3xl"}
      />
      <nav className="flex justify-center flex-wrap ">
        <div className="border">
          {NavDias.map((dias, index) => (
            <button key={index} className="p-2 font-semibold">
              {dias}
            </button>
          ))}
        </div>
      </nav>
      <main className="grid grid-cols-2">
        <aside className=" p-32"></aside>
        <article className="flex flex-col gap-6 p-3 ">
          <div className="bg-slate-50 border rounded-lg p-4">
            <h3 className="font-bold">Consejos para el Evento</h3>
            <ul>
              <li>Llega 15 minutos antes a cada sesión</li>
              <li>Trae tu portátil para los talleres prácticos</li>
              <li>Aprovecha los momentos de networking</li>
            </ul>
          </div>
          <div className="bg-slate-50 border rounded-lg p-4">
            <h3 className="font-bold">Filtrar por Tema</h3>
            <ul>
              <li>
                <input type="checkbox" /> Configuración Básica
              </li>
              <li>
                {" "}
                <input type="checkbox" /> Integración API
              </li>
              <li>
                {" "}
                <input type="checkbox" /> Automatización
              </li>
              <li>
                {" "}
                <input type="checkbox" /> Análisis de Datos
              </li>
            </ul>
          </div>
        </article>
      </main>
    </main>
  );
};

export default Intinerario;
