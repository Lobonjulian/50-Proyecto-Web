import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alimentacion from "./page/Alimentacion.jsx";
import ContactoPage from "./page/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./page/Home.jsx";
import Intinerario from "./page/Intinerario.jsx";
import OradoresPage from "./page/OradoresPage.jsx";
import Politicas from "./page/Politicas.jsx";
import Ubicacion from "./page/Ubicacion.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/oradores" element={<OradoresPage />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/programacion" element={<Intinerario />} />
          <Route path="/alimentos" element={<Alimentacion />} />
          <Route path="/conducta" element={<Politicas />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
