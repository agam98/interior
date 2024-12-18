import { FaBars } from 'react-icons/fa';
import { useState } from 'preact/hooks';
import { NavLinks } from './NavLinks';

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
            aria-label="Toggle menu"
          >
            <FaBars className="text-2xl" />
          </button>

          <NavLinks isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}