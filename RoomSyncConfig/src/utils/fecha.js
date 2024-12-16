export const Fecha = () => {
  const countDownDate = new Date("May 15, 2025 09:00:00").getTime();
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
