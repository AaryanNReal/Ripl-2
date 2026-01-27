import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 👉 category pages
import Retail from "./pages/Retail";
import Banking from "./pages/Banking";
import Corporate from "./pages/Corporate";
import Hospitality from "./pages/Hospitality";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Index />} />

          {/* CATEGORY PAGES */}
          <Route path="/projects/retail" element={<Retail />} />
          <Route path="/projects/banking" element={<Banking />} />
          <Route path="/projects/corporate" element={<Corporate />} />
          <Route path="/projects/hospitality" element={<Hospitality />} />

          {/* 404 — ALWAYS LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
