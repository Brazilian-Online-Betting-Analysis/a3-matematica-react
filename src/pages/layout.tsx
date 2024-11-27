import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToHashElement } from "@/components/scroll-to-hash-element";

export function Layout() {
  return (
    <>
      <Toaster />
      <ScrollToHashElement />
      <HelmetProvider>
        <Helmet titleTemplate="%s | Bet" />

        <Navbar />

        <Outlet />

        <Footer />
      </HelmetProvider>
    </>
  );
}
