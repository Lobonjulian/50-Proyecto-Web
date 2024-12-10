import Card from "./ui/Card";

const Oradores = () => {
  return (
    <section className="px-8 py-10 flex flex-col wrap items-center">
      <div>
        <h2 className="font-bold text-2xl">Oradores Destacados</h2>
        <p className="text-gray-400">Conoce a nuestros expertos</p>
      </div>

      <div>
        <Card />
      </div>
    </section>
  );
};

export default Oradores;