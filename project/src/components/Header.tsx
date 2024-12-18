import { FaBars } from 'react-icons/fa';
import { useState } from 'preact/hooks';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary">Graha Interior</div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li><a href="#home" className="text-primary hover:text-accent">Home</a></li>
              <li><a href="#portfolio" className="text-primary hover:text-accent">Portfolio</a></li>
              <li><a href="#services" className="text-primary hover:text-accent">Services</a></li>
              <li><a href="#contact" className="text-primary hover:text-accent">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}