import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ri.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Manufacturing", href: "#factories" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-gradient-to-b
        from-charcoal/95
        via-charcoal/90
        to-charcoal/85
        backdrop-blur-md
        border-b border-white/5
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[96px]">

          {/* Logo + Brand */}
          <a
            href="#home"
            className="flex items-center gap-4 whitespace-nowrap"
          >
            <img
              src={logo}
              alt="Raghbir Interiors Logo"
              className="
                w-[60px]
                h-[60px]
                sm:w-[80px]
                sm:h-[80px]
                object-contain
                shrink-0
              "
            />

            <div className="flex items-center h-[80px]">
              <h1
                className="
                  font-serif
                  font-medium
                  leading-none
                  tracking-[0.05em]
                  flex
                  items-center
                "
              >
                <span className="text-gold text-[18px] sm:text-[22px]">
                  RAGHBIR
                </span>

                <span className="text-header-foreground text-[18px] sm:text-[22px] ml-2">
                  INTERIORS
                </span>

                <span className="hidden sm:inline text-header-foreground text-[18px] sm:text-[22px] ml-2">
                  PVT. LTD.
                </span>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link gold-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden text-header-foreground hover:text-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-charcoal-light border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;