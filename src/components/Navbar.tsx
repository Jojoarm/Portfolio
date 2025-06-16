import { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? 'top-0 bg-black' : 'md:top-10 top-0 bg-transparent'
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a className="logo animate-bounce-custom" href="#home">
          Dev | Armani
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, target }) => (
              <li key={name} className="group">
                <a href={link} target={target}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="flex group">
          <div className="px-5 py-2 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300">
            <span className="group-hover:text-white transition-colors duration-300">
              Reach Out!
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
