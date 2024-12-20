import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alimentacion from "./pages/Alimentacion.jsx";
import ContactoPage from "./pages/Contacto.jsx";
import Footer from "./components/common/Footer.jsx";
import Header from "./components/common/Header.jsx";
import Home from "./pages/Home.jsx";
import Itinerary from "./pages/Intinerario.jsx";
import OradoresPage from "./pages/OradoresPage.jsx";
import Politicas from "./pages/Politicas.jsx";
import Ubicacion from "./pages/Ubicacion.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alimentos" element={<Alimentacion />} />
          <Route path="/conducta" element={<Politicas />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/oradores" element={<OradoresPage />} />
          <Route path="/programacion" element={<Itinerary />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
