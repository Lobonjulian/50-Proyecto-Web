import { Fecha } from "@/utils/fecha";

const CuentaRegresiva = () => {
  return (
    <section className="flex flex-col items-center py-20 gap-8 bg-gradient-to-r from-violet-700 to-blue-200">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-yellow-500">Cuenta Regresiva</h2>
        <p className="text-rose-50">
          15 - 16 de mayo de 2025 | Yumbo, Colombia
        </p>
      </div>
      <article>
        <div className="flex flex-row justify-center gap-4 mt-4">
          <div className="flex flex-col items-center">
            <p className="text-6xl text-yellow-500" id="dias">
              0
            </p>
            <p className="text-gray-50">Dias</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl text-yellow-500" id="horas">
              0
            </p>
            <p className="text-gray-50">Horas</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl text-yellow-500" id="minutos">
              0
            </p>
            <p className="text-gray-50">Minutos</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl text-yellow-500" id="segundos">
              0
            </p>
            <p className="text-gray-50">Segundos</p>
          </div>
        </div>
        <Fecha />
      </article>
    </section>
  );
};

export default CuentaRegresiva;
