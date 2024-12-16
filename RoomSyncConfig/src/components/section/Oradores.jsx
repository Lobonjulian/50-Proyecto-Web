import Card from "../ui/Card";

const Oradores = ({ titulo, subtitulo, datosMap }) => {
  return (
    <section className="px-8 py-10 flex flex-col wrap items-center">
      {titulo && (
        <div>
          <h2 className="font-bold text-amber-500 text-center">{titulo}</h2>
          <p className="font-bold text-2xl text-center">{subtitulo}</p>
        </div>
      )}

      <div>
        <Card datosMap={datosMap} />
      </div>
    </section>
  );
};

export default Oradores;
