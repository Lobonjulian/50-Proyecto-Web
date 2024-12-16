const Tarjeta = ({ datos }) => {
  const { name, empresa, description, icono } = datos;

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
        <p className="text-gray-600">{empresa}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default Tarjeta;

// const Card = () => {
//   return (
//     <div className="flex  justify-center gap-4 ">
//       {Ubicacion.map((ubicacion) => (
//         <div
//           key={ubicacion.id}
//           className="flex flex-col gap-2 p-4 border w-[342px]"
//         >
//           <h3 className="font-bold">{ubicacion.titulo}</h3>
//           {ubicacion.medios.map((medio) => (
//             <div key={medio.titulo}>
//               <h4 className="font-bold">{medio.titulo}</h4>
//               {typeof medio.description === "string" ? (
//                 <p className="text-pretty">{medio.description}</p>
//               ) : (
//                 <>
//                   <p className="">{medio.description.p1}</p>
//                   <p className="opacity-50 text-sm">{medio.description.p2}</p>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };