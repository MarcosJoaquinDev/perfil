import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full p-2  shadow-sm shadow-slate-50">
      <nav>
        <ul className="flex flex-row justify-start gap-4 text-xl ml-4">
          <Link href={"/"}>
            <li className="hover:text-slate-400">MJD</li>
          </Link>
          <Link href={"/projects"}>
            <li className="hover:text-slate-400">Proyectos</li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:text-slate-400">Contacto</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
