import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToHashElement } from "@/components/scroll-to-hash-element";
import { HistoryProvider } from "@/contexts/history-context";

export function Layout() {
  return (
    <HistoryProvider>
      <Toaster />
      <ScrollToHashElement />
      <HelmetProvider>
        <Helmet />

        <Navbar />

        <Outlet />

        <Footer />
      </HelmetProvider>
    </HistoryProvider>
  );
}
