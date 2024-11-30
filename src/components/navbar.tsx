import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResultsHistoryModal } from "./results-history-modal";
import {
  Calculator,
  ChartArea,
  HelpCircle,
  History,
  Menu,
  Target,
  Trophy,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { GithubIcon } from "./icons/github";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isResultPage = location.pathname.startsWith("/result/");
  const [isResultsHistoryModalOpen, setIsResultsHistoryModalOpen] =
    useState(false);

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
      <div className="container mx-auto grid grid-cols-5 items-center">
        <NavLink
          href="/#top"
          className="text-xl"
          isScrolled={isScrolled}
          isResultPage={isResultPage}
        >
          Betting
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-8 col-span-3">
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
          <li>
            <NavLink
              href="/math"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
            >
              <Calculator className="size-4" />
              Matemática
            </NavLink>
          </li>

          <li>
            <NavLink
              href="/rankings"
              isScrolled={isScrolled}
              isResultPage={isResultPage}
            >
              <Trophy className="size-4" />
              Rankings
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-end items-center gap-4 col-span-4 md:col-span-1">
          <div className="hidden md:block">
            <ResultsHistoryModal
              isOpen={isResultsHistoryModalOpen}
              onOpenChange={setIsResultsHistoryModalOpen}
            />

            <Button
              variant="secondary"
              size="icon"
              onClick={() => setIsResultsHistoryModalOpen(true)}
            >
              <History className="size-4" />
            </Button>
          </div>

          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="md:hidden"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                {isDrawerOpen ? (
                  <X className="size-4" />
                ) : (
                  <Menu className="size-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu de Navegação</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col py-4 gap-4">
                <li>
                  <NavLink
                    href="/#por-que"
                    isScrolled={true}
                    isResultPage={isResultPage}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <HelpCircle className="size-4" />
                    Por que?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/#como"
                    isScrolled={true}
                    isResultPage={isResultPage}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <HelpCircle className="size-4" />
                    Como?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/#ods"
                    isScrolled={true}
                    isResultPage={isResultPage}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Target className="size-4" />
                    ODS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/data"
                    isScrolled={true}
                    isResultPage={isResultPage}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <ChartArea className="size-4" />
                    Dados
                  </NavLink>
                </li>

                <li>
                  <button
                    className="hover:underline hover:underline-offset-4 whitespace-nowrap text-slate-800 hover:text-slate-900 flex items-center gap-2"
                    onClick={() => setIsResultsHistoryModalOpen(true)}
                  >
                    <History className="size-4" /> Histórico
                  </button>
                </li>

                <li>
                  <NavLink
                    href="/rankings"
                    isScrolled={true}
                    isResultPage={isResultPage}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Trophy className="size-4" /> Rankings
                  </NavLink>
                </li>

                <li>
                  <a
                    href="https://github.com/Brazilian-Online-Betting-Analysis/a3-matematica-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors flex items-center justify-start gap-2"
                  >
                    <GithubIcon className="size-4" /> Ver no GitHub{" "}
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
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
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "hover:underline hover:underline-offset-4 whitespace-nowrap flex items-center gap-2",
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
