import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export function Layout() {
  return (
    <>
      <Toaster />
      <HelmetProvider>
        <Helmet titleTemplate="%s | Bet" />

        <Navbar />

        <Outlet />

        <Footer />
      </HelmetProvider>
    </>
  );
}
