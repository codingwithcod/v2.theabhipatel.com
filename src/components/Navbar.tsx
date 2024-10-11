import Link from "next/link";
import NavbarMobileMenu from "./NavbarMobileMenu";

const Navbar = async () => {
  return (
    <header className="fixed top-0 z-50 mx-auto w-full border-b border-muted-foreground/10 bg-background/50 text-foreground backdrop-blur-xl">
      <div className="container flex h-16 w-full justify-between sm:px-5 md:px-10 lg:px-20">
        {/* ---> Logo Developers Blog */}
        <div className="flex items-center text-xl font-semibold md:text-3xl">
          <Link href={"/"}>TheAbhiPatel</Link>
        </div>

        <div className="flex gap-3">
          {/* ---> Navlinks and profile */}
          <div className="flex items-center gap-5">
            <nav className="hidden items-end gap-5 text-sm text-foreground sm:flex">
              <Link href={"/skills"}>Skills</Link>
              <Link href={"/projects"}>Projects</Link>
              <Link href={"/about"}>About Me</Link>
            </nav>
          </div>

          {/* ---> Mobile Navbar */}
          <div className="flex items-center justify-center md:hidden">
            <NavbarMobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
