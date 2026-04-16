import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { CompanyPage } from "./pages/CompanyPage";
import { MisionPage } from "./pages/MisionPage";
import { EticaPage } from "./pages/EticaPage";
import { LiderazgoPage } from "./pages/LiderazgoPage";
import { MercadosPage } from "./pages/MercadosPage";
import { AlquilerFlotaPage } from "./pages/AlquilerFlotaPage";
import { GarantiaEntregaPage } from "./pages/GarantiaEntregaPage";
import { HornosPage } from "./pages/proyectos/HornosPage";
import { PipingPage } from "./pages/proyectos/PipingPage";
import { EstructurasPage } from "./pages/proyectos/EstructurasPage";
import { MetalurgiaPage } from "./pages/proyectos/MetalurgiaPage";
import { HornoDetallePage } from "./pages/proyectos/HornoDetallePage";
import { PipingDetallePage } from "./pages/proyectos/PipingDetallePage";
import { EstructurasDetallePage } from "./pages/proyectos/EstructurasDetallePage";
import { MetalurgiaDetallePage } from "./pages/proyectos/MetalurgiaDetallePage";
import { ClientesPage } from "./pages/ClientesPage";
import { ContactoPage } from "./pages/ContactoPage";
import "./tailwind.css";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nuestra-empresa" element={<CompanyPage />} />
        <Route path="/mision-vision-valores" element={<MisionPage />} />
        <Route path="/etica-compliance" element={<EticaPage />} />
        <Route path="/liderazgo" element={<LiderazgoPage />} />
        <Route path="/mercados" element={<MercadosPage />} />
        <Route path="/alquiler-de-flota" element={<AlquilerFlotaPage />} />
        <Route path="/garantia-de-entrega" element={<GarantiaEntregaPage />} />
        <Route path="/proyectos/hornos" element={<HornosPage />} />
        <Route path="/proyectos/hornos/:id" element={<HornoDetallePage />} />
        <Route path="/proyectos/piping" element={<PipingPage />} />
        <Route path="/proyectos/piping/:id" element={<PipingDetallePage />} />
        <Route path="/proyectos/estructuras" element={<EstructurasPage />} />
        <Route path="/proyectos/estructuras/:id" element={<EstructurasDetallePage />} />
        <Route path="/proyectos/metalurgia" element={<MetalurgiaPage />} />
        <Route path="/proyectos/metalurgia/:id" element={<MetalurgiaDetallePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);