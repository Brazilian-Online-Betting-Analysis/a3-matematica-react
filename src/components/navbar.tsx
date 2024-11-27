import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ResultsHistoryModal from "./ResultsHistoryModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isResultPage = location.pathname.startsWith("/result/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "w-full flex fixed top-0 justify-between items-center z-50 h-16 transition-colors duration-200",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">
        <NavLink
          href="/"
          className="text-xl "
          isScrolled={isScrolled}
          isResultPage={isResultPage}
          onClick={() => scrollToSection("hero")}
        >
          Betting
        </NavLink>
        <ul className="flex justify-center items-center gap-8">
          <li>
            <NavLink
              href="por-que"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
              onClick={() => scrollToSection("por-que")}
            >
              Por que?
            </NavLink>
          </li>
          <li>
            <NavLink
              href="como"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
              onClick={() => scrollToSection("como")}
            >
              Como?
            </NavLink>
          </li>
          <li>
            <NavLink
              href="ods"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
              onClick={() => scrollToSection("ods")}
            >
              ODS
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/data"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
            >
              Dados
            </NavLink>
          </li>
        </ul>
        <ResultsHistoryModal />
      </div>
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isScrolled?: boolean;
  isResultPage?: boolean;
  onClick?: () => void;
};

const NavLink = ({
  href,
  children,
  className,
  isScrolled = false,
  isResultPage = false,
  onClick,
}: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={cn(
        "hover:underline hover:underline-offset-4",
        isResultPage || isScrolled
          ? "text-slate-800 hover:text-slate-900"
          : "text-white hover:text-zinc-200",
        className,
      )}
    >
      {children}
    </Link>
  );
};
