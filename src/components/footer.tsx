import ibmrLogo from "../assets/ibmr-logo.png";
import { GithubIcon } from "./icons/github";

export const Footer = () => {
  return (
    <footer className="border-t border-t-zinc-200 bg-white mt-16">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={ibmrLogo}
              alt="IBMR"
              className="h-16 w-16 hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-medium">IBMR</span>
              <span className="text-sm text-gray-500">Universidade IBMR</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
            <p className="text-sm text-gray-500">
              Desenvolvido com ❤️ por alunos do IBMR
            </p>
            <a
              href="https://github.com/Brazilian-Online-Betting-Analysis/a3-matematica-react"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center gap-1"
            >
              <GithubIcon className="size-4" /> Ver no GitHub{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
