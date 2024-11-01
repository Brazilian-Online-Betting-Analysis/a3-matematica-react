export const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center pt-10">
      <ul className="flex justify-between items-center w-full max-w-[500px]">
        <li>
          <NavLink href="#por-que">Por que?</NavLink>
        </li>
        <li>
          <NavLink href="#como">Como?</NavLink>
        </li>
        <li>
          <NavLink href="#time">Nosso Time</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-white hover:text-zinc-200 hover:underline hover:underline-offset-4"
    >
      {children}
    </a>
  );
};
