const Fecha = () => {
  const countDownDate = new Date("May 27, 2025 00:00:00").getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("dias").innerText = days;
    document.getElementById("horas").innerText = hours;
    document.getElementById("minutos").innerText = minutes;
    document.getElementById("segundos").innerText = seconds;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("dias").innerText = "0";
      document.getElementById("horas").innerText = "0";
      document.getElementById("minutos").innerText = "0";
      document.getElementById("segundos").innerText = "0";
    }
  }, 1000);
};

const CuentaRegresiva = () => {
  return (
    <section className="flex flex-col items-center py-20 gap-8 bg-gradient-to-r from-violet-500 to-blue-500">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Cuenta Regresiva</h2>
        <p className="text-gray-400">
          15 - 16 de mayo de 2025 | Santiago de Cali{" "}
        </p>
      </div>
      <div>
        <div className="flex flex-row justify-center gap-4 mt-4">
          <div className="flex flex-col items-center">
            <p className="text-6xl" id="dias">
              0
            </p>
            <p className="text-gray-400">Dias</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl" id="horas">
              0
            </p>
            <p className="text-gray-400">Horas</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl" id="minutos">
              0
            </p>
            <p className="text-gray-400">Minutos</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl" id="segundos">
              0
            </p>
            <p className="text-gray-400">Segundos</p>
          </div>
        </div>
        <Fecha />
      </div>
    </section>
  );
};

export default CuentaRegresiva;
