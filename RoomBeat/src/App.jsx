import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
