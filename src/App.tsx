import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Accommodations from "./pages/Accommodations";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Packages from "./pages/Packages";
import ListProperty from "./pages/ListProperty";
import PropertyListing from "./pages/PropertyListing";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import HotelDetails from "@/pages/HotelDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/property-listing" element={<PropertyListing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
