import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage";
import Footer from "./components/Footer";
import "./styles/layouts/page.css";

const HomePage = lazy(() => import("./Pages/Home"));
const CharacteristicsPage = lazy(() => import("./Pages/CarateristicasPage"));
const ContactoPage = lazy(() => import("./Pages/ContactoPage"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caracteristicas" element={<CharacteristicsPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
