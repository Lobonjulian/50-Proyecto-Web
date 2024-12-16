import Tarjeta from "./Tarjeta";

const Card = ({ datosMap }) => {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="oradores-titulo">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {datosMap.map((data, index) => (
          <Tarjeta datos={data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Card;
