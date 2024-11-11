import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full flex sticky justify-center items-center z-10 h-16">
      <ul className="flex justify-between items-center w-full max-w-[500px]">
        <li>
          <NavLink href="/#por-que">Por que?</NavLink>
        </li>
        <li>
          <NavLink href="/#como">Como?</NavLink>
        </li>
        <li>
          <NavLink href="/#ods">ODS</NavLink>
        </li>
        {/* <li>
          <NavLink href="/#time">Nosso Time</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <Link
      to={href}
      className={cn(
        "hover:underline hover:underline-offset-4",
        isHome ? "text-white hover:text-zinc-200" : "text-primary",
      )}
    >
      {children}
    </Link>
  );
};
