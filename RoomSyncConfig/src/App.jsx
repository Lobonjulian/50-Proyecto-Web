import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/section/Hero.jsx";
import Oradores from "./components/section/Oradores.jsx";
import CuentaRegresiva from "./components/section/CuentaRegresiva.jsx";
import Eventos from "./components/section/Eventos.jsx";
import Location from "./components/section/Location.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Oradores />
      <CuentaRegresiva />
      <Location />
      <Eventos />
      <Footer />
    </>
  );
}

export default App;
