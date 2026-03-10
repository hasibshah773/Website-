import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-rose-gold flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div
                  className="font-display font-bold text-sm leading-tight"
                  style={{ color: scrolled ? "hsl(340 75% 48%)" : "white" }}
                >
                  Dream Look
                </div>
                <div
                  className="text-xs leading-tight tracking-widest uppercase"
                  style={{ color: scrolled ? "hsl(340 8% 38%)" : "rgba(255,255,255,0.85)" }}
                >
                  Makeover by Barsha
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-primary font-semibold"
                      : scrolled
                      ? "text-foreground/70 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/booking">
              <Button
                size="sm"
                className="ml-2 bg-primary text-primary-foreground font-medium"
                data-testid="button-nav-book"
              >
                Book Now
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
            style={{ color: scrolled ? "hsl(340 8% 15%)" : "white" }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-100 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                <span
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer ${
                    location === link.href
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/booking">
              <Button className="w-full mt-2" data-testid="button-mobile-book">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
