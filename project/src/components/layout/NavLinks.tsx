interface NavLinksProps {
  isMenuOpen: boolean;
}

export function NavLinks({ isMenuOpen }: NavLinksProps) {
  return (
    <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent`}>
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
        <li><a href="#home" className="text-primary hover:text-accent">Home</a></li>
        <li><a href="#portfolio" className="text-primary hover:text-accent">Portfolio</a></li>
        <li><a href="#services" className="text-primary hover:text-accent">Services</a></li>
        <li><a href="#contact" className="text-primary hover:text-accent">Contact</a></li>
      </ul>
    </nav>
  );
}