const Ubicacion = [
  {
    id: 1,
    titulo: "Como Llegar",
    medios: [
      {
        titulo: "Metro",
        icono: "",
        description: "Línea 1 - Estación Centro de Convenciones",
      },
      {
        titulo: "Autobus",
        icono: "",
        description: "Rutas 101, 102 y 103",
      },
      {
        titulo: "Taxi/Uber",
        icono: "",
        description: "Servicio disponible 24/7",
      },
    ],
  },
  {
    id: 2,
    titulo: "Estacionamiento",
    medios: [
      {
        titulo: "Estacionamiento",
        icono: "",
        description: "Estacionamiento gratuito",
      },
      {
        titulo: "Accesibilidad",
        icono: "",
        description: "Espacios reservados disponibles",
      },
    ],
  },
  {
    id: 3,
    titulo: "Hoteles Recomendados",
    medios: [
      {
        titulo: "Hoteles Plaza",
        icono: "",
        description: {
          p1: "Desde $150 Noche",
          p2: "a 5 minutos caminnando",
        },
      },
      {
        titulo: "Grand Hotel",
        icono: "",
        description: {
          p1: "Desde $200 Noche",
          p2: "A 10 minutos caminando",
        },
      },
    ],
  },
];

const Card = () => {
  return (
    <div className="flex  justify-center gap-4 ">
      {Ubicacion.map((ubicacion) => (
        <div
          key={ubicacion.id}
          className="flex flex-col gap-2 p-4 border w-[342px]"
        >
          <h3 className="font-bold">{ubicacion.titulo}</h3>
          {ubicacion.medios.map((medio) => (
            <div key={medio.titulo}>
              <h4 className="font-bold">{medio.titulo}</h4>
              {typeof medio.description === "string" ? (
                <p className="text-pretty">{medio.description}</p>
              ) : (
                <>
                  <p className="">{medio.description.p1}</p>
                  <p className="opacity-50 text-sm">{medio.description.p2}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Location = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Ubicación</h2>
        <p>Centro de Convenciones Valles del Pacifico, Palmira, Colombia</p>
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Location;
