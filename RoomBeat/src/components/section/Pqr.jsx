import { PqrData } from "../../utils/data"
import DataMap from "../Part/DataMap"

const Pqr = () => {
  return (
    <div>
    <h2> Preguntas Frecuentes </h2>
      <DataMap Datos={PqrData}  className="pqr"/> 
    </div>
  )
}

export default Pqr