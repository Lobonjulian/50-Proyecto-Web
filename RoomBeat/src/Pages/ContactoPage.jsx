import Form from "../components/section/Form";
import Redes from "../components/Part/Redes";
import Mapa from "../components/Part/Mapa";

const InfoPersonal = [
  { titulo: "Teléfono de soporte", information: "+57 300 123 4567", icono: "" },
  {
    titulo: "Correo electrónico",
    information: "contacto@roombeat.co",
    icono: "",
  },
  {
    titulo: "Horario de atención",
    information: "Lunes a Viernes: 9:00 - 18:00",
    icono: "",
  },
];

const Contacto = () => {
  return (
    <main>
      <h1>Contactos </h1>
      <aside>
        <Form />
      </aside>

      <section>
        <div>
          <h3>Información Personal</h3>
          <section>
            {InfoPersonal.map((info) => (
              <div key={info.titulo}>
                <h4>{info.titulo}</h4>
                <p>{info.information}</p>
              </div>
            ))}
          </section>
          <p>síguenos en nuestras redes</p>
          <Redes />
        </div>
        <div>
          <h3>Nuestra Ubicación</h3>
          <Mapa />
        </div>
      </section>
    </main>
  );
};

export default Contacto;
