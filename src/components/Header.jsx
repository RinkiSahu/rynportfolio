import { cn } from "../lib/Utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import{navItems ,logo} from '../data'
export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.screenY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
      <header className="flex items-center justify-between px-6 py-4 shadow-md mt-2">
        <img src={logo} alt="Logo" className="h-6" />
        <nav className="flex gap-4 items-center">
        <div className="hidden md:flex">
        {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-white/90 text-sm px-4 py-2 hover:rounded-full hover:bg-white hover:text-black syne-regular'
            >
              {item.name}
            </a>
          ))}
            </div>
               {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white/80 z-50 cursor-pointer absolute top-5 right-1"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-white/80  px-4 py-2 transition-colors hover:rounded-full hover:bg-white hover:text-black syne-regular text-sm "
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

          </nav>
          <button className="tracking-tight syne-regular text-xs cosmic-button text-white px-4 py-2 rounded-full border border-white transition cursor-pointer uppercase mr-6 md:mr-0">
            Hire Me
          </button>

      </header>
    );
  }