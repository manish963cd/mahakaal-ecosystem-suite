import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// NGO Pages
import NgoHome from "./pages/ngo/NgoHome";
import NgoAbout from "./pages/ngo/NgoAbout";
import NgoPrograms from "./pages/ngo/NgoPrograms";
import NgoDonate from "./pages/ngo/NgoDonate";
import NgoNews from "./pages/ngo/NgoNews";
import NgoContact from "./pages/ngo/NgoContact";

// Group Pages
import GroupAbout from "./pages/group/GroupAbout";
import Estate from "./pages/estate/Estate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Group Routes */}
          <Route path="/about" element={<GroupAbout />} />
          <Route path="/estate" element={<Estate />} />
          
          {/* NGO Routes */}
          <Route path="/ngo" element={<NgoHome />} />
          <Route path="/ngo/about" element={<NgoAbout />} />
          <Route path="/ngo/programs" element={<NgoPrograms />} />
          <Route path="/ngo/donate" element={<NgoDonate />} />
          <Route path="/ngo/news" element={<NgoNews />} />
          <Route path="/ngo/contact" element={<NgoContact />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
