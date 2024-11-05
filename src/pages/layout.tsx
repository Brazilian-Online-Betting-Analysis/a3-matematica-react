import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Layout() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Bet" />

      <Navbar />

      <Outlet />
    </HelmetProvider>
  );
}
