const DatosMap = ({ datos }) => {
  return (
    <article className="flex flex-col flex-wrap gap-2 border rounded-lg">
   

  <div>
    {datos.map((dato) => {
      if (dato.id !== undefined) {
        return (
          <div key={dato.id} className="flex items-center gap-2">
            <span className="text-lg font-bold">{dato.name}</span>
            <p className="text-sm">{dato.description}</p>
          </div> 
        );
      }
    })}
  </div>
    </article>
  );
};

export default DatosMap;
