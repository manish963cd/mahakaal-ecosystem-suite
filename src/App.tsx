import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import MainHome from "./pages/MainHome";
import NotFound from "./pages/NotFound";

// NGO Pages
import NgoLayout from "./pages/ngo/NgoLayout";
import NgoHome from "./pages/ngo/NgoHome";
import NgoAbout from "./pages/ngo/NgoAbout";
import NgoPrograms from "./pages/ngo/NgoPrograms";
import NgoDonate from "./pages/ngo/NgoDonate";
import NgoNews from "./pages/ngo/NgoNews";
import NgoContact from "./pages/ngo/NgoContact";

// Estate Pages
import EstateLayout from "./pages/estate/EstateLayout";
import EstateHome from "./pages/estate/EstateHome";
import EstateProjects from "./pages/estate/EstateProjects";
import EstateServices from "./pages/estate/EstateServices";
import EstateContact from "./pages/estate/EstateContact";

// Components
import Toast from "./components/Toast";
import Loader from "./components/Loader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toast />
      <Loader />
      <Routes>
        {/* Main Parent Route */}
        <Route path="/" element={<MainHome />} />
        
        {/* NGO Child Routes */}
        <Route path="/ngo" element={<NgoLayout />}>
          <Route index element={<NgoHome />} />
          <Route path="about" element={<NgoAbout />} />
          <Route path="programs" element={<NgoPrograms />} />
          <Route path="donate" element={<NgoDonate />} />
          <Route path="news" element={<NgoNews />} />
          <Route path="contact" element={<NgoContact />} />
        </Route>
        
        {/* Estate Child Routes */}
        <Route path="/estate" element={<EstateLayout />}>
          <Route index element={<EstateHome />} />
          <Route path="projects" element={<EstateProjects />} />
          <Route path="services" element={<EstateServices />} />
          <Route path="contact" element={<EstateContact />} />
        </Route>
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
