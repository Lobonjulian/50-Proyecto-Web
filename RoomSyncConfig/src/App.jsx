import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import OradoresPage from "./page/OradoresPage.jsx";
import Alimentacion from "./page/Alimentacion.jsx";
import Politicas from "./page/Politicas.jsx";
import Ubicacion from "./page/Ubicacion.jsx";
import Intinerario from "./page/Intinerario.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contacto" element={<OradoresPage />} /> */}
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
