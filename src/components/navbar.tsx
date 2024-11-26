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
        >
          Betting
        </NavLink>
        <ul className="flex justify-center items-center gap-8">
          <li>
            <NavLink
              href="/#por-que"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
            >
              Por que?
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/#como"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
            >
              Como?
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/#ods"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
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
};

const NavLink = ({
  href,
  children,
  className,
  isScrolled = false,
  isResultPage = false,
}: NavLinkProps) => {
  return (
    <Link
      to={href}
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
