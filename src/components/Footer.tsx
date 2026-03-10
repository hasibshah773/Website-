import Link from "next/link";
import { Phone, MapPin, Facebook, Instagram, MessageCircle, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white leading-tight">Dream Look Makeover</div>
                <div className="text-xs text-white/60 tracking-widest uppercase">by Barsha</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional bridal and party makeup studio in Barishal, Bangladesh. Helping every client achieve their most beautiful, confident look.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/share/1B4SnLU7Zp/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/8801951592999"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book Appointment", href: "/booking" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 text-sm hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">College Row, 1st Lane,<br />Barishal, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+8801951592999" className="text-white/70 text-sm hover:text-primary transition-colors">
                  +880 1951-592999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/8801951592999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-primary transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="mt-5 p-3 rounded-md bg-white/5 border border-white/10">
              <p className="text-white/60 text-xs font-medium mb-1">Working Hours</p>
              <p className="text-white/80 text-sm">Sat – Thu: 10:00 AM – 8:00 PM</p>
              <p className="text-white/80 text-sm">Friday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Dream Look Makeover by Barsha. All rights reserved.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Barishal, Bangladesh
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/8801951592999"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
}
