import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MotoDetail from "./pages/MotoDetail";
import CatalogoMotos from "./pages/CatalogoMotos";
import PagePuntosAtencion from "./pages/PagePuntosAtencion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/moto/:nombre" element={<MotoDetail />} />
        <Route path="/catalogo" element={<CatalogoMotos />} />
        <Route path="/puntos-atencion" element={<PagePuntosAtencion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
