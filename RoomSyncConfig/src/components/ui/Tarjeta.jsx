const Tarjeta = ({ datos }) => {
  const { name, description, icono } = datos;

  return (
    <article className="flex flex-col flex-wrap gap-2 border rounded-lg">
      {icono && (
        <img
          src={icono}
          alt={name}
          loading="lazy"
          className="w-58 h-32 object-cover"
        />
      )}

      <div className="px-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default Tarjeta;
