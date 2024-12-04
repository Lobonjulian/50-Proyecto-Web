import { PqrData } from "../../utils/data";
import DataMap from "../Part/DataMap";

const Pqr = () => {
  return (
    <section className="pqr">
      <h2> Preguntas Frecuentes </h2>
      <DataMap Datos={PqrData} className="pqr__data" />
    </section>
  );
};

export default Pqr;
