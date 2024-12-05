import { InfoPersonal } from "../utils/data";
import DataMap from "../components/Part/DataMap";
import Form from "../components/section/Form";
import IconoComponentes from "../components/Part/IconComponentes";
import Mapa from "../components/Part/Mapa";
import Redes from "../components/Part/redes";
import Ubicacion from "../assets/icons/ubicacion.svg";

const Contacto = () => {
  return (
    <main className="contacto">
      <h1>Contactos </h1>
      <section className="contacto contacto__forms">
       <section className="contacto contacto__form__info">
        <Form />
       </section>

      <section className="contacto contacto__form__info">
        <div className="contacto contacto__form__info__personal">
          <h3>Información Personal</h3>
          <section>
            <DataMap Datos={InfoPersonal} className="info" />
          </section>
          <p>síguenos en nuestras redes</p>
          <Redes />
        </div>
        <div className="contacto__form__info__personal">
          <h3>Nuestra Ubicación</h3>
          <Mapa />
          <div className="contacto contacto__form">
            <IconoComponentes icon={Ubicacion} />
            <p>Roombeat, 123 Calle Principal, Ciudad, País</p>
          </div>
        </div>
      </section>
      </section>
    </main>
  ); 
};

export default Contacto;
