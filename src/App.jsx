import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MotoDetail from "./pages/MotoDetail";
import CatalogoMotos from "./pages/CatalogoMotos";
import PagePuntosAtencion from "./pages/PagePuntosAtencion";
import ServicioAlCliente from "./pages/ServicioAlCliente";
import ScrollToTop from "./components/ScrollToTop";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import AxisMember from "./pages/AxisMember";
import Financiacion from "./pages/Financiacion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div className="pt-[5vh] md:pt-[7vh]">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/moto/:nombre" element={<MotoDetail />} />
          <Route path="/catalogo" element={<CatalogoMotos />} />
          <Route path="/puntos-atencion" element={<PagePuntosAtencion />} />
          <Route path="/servicio-cliente" element={<ServicioAlCliente />} />
          <Route path="/tyc" element={<TerminosCondiciones />} />
          <Route path="/axis-member" element={<AxisMember />} />
          <Route path="/financiacion" element={<Financiacion />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
