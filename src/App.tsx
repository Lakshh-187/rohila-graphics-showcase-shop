
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Index from "./pages/Index";
import Samples from "./pages/Samples";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import Testimonial from "./pages/Testimonial";
import ChannelPartner from "./pages/ChannelPartner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/channel-partner" element={<ChannelPartner />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
