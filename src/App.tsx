import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Index from "./pages/Index";
import AboutPage from "./pages/about";

import Corporate from "./pages/Corporate";
import Retail from "./pages/Retail";
import Hospitality from "./pages/Hospitality";

import DynamicCategory from "./pages/DynamicCategory";

import ProjectDetail from "./pages/ProjectDetail";
import FactoryDetail from "./pages/FactoryDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={<Index />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<AboutPage />}
            />

            {/* EXISTING CATEGORY ROUTES */}
            <Route
              path="/corporate"
              element={<Corporate />}
            />

            <Route
              path="/retail"
              element={<Retail />}
            />

            <Route
              path="/hospitality"
              element={<Hospitality />}
            />

            {/* NEW DYNAMIC CATEGORY ROUTE */}
            <Route
              path="/category/:category"
              element={<DynamicCategory />}
            />

            {/* PROJECT DETAILS */}
            <Route
              path="/projects/:category/:slug"
              element={<ProjectDetail />}
            />

            {/* FACTORY */}
            <Route
              path="/factory-detail"
              element={<FactoryDetail />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;