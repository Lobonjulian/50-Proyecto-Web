import { oradores } from "@/data/oradoresInfo";
import Card from "../ui/Card";

const Oradores = ({ titulo, subtitulo, datosMap }) => {
  const combinedData = datosMap.map((orador, index) => ({
    ...orador,
    ...oradores[index], // Asumiendo que oradores tiene la misma longitud que datosMap
  }));

  return (
    <section className="px-8 py-10 flex flex-col wrap items-center">
      {titulo && (
        <div>
          <h2 className="font-bold text-amber-500 text-center">{titulo}</h2>
          <p className="font-bold text-2xl text-center">{subtitulo}</p>
        </div>
      )}

      <div>
        <Card datosMap={combinedData} />
      </div>
    </section>
  );
};

export default Oradores;
