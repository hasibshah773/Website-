import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const galleryItems = [
  {
    src: "/images/real-bridal-red-after.png",
    alt: "Red bridal makeup look",
    category: "Bridal",
    title: "Red Bride Look",
  },
  {
    src: "/images/real-bridal-elegant.png",
    alt: "Elegant bride in lavender saree",
    category: "Bridal",
    title: "Elegant Bride",
  },
  {
    src: "/images/real-bridal-lavender.png",
    alt: "Bridal makeup in lavender saree with gold jewelry",
    category: "Bridal",
    title: "Lavender Bridal Glam",
  },
  {
    src: "/images/real-gold-glitter.png",
    alt: "Gold glittery signature makeup",
    category: "Bridal",
    title: "Gold Glitter Signature",
  },
  {
    src: "/images/real-party-clients.png",
    alt: "Party makeup clients in red sarees",
    category: "Party",
    title: "Party Makeover",
  },
  {
    src: "/images/real-party-barsha.png",
    alt: "Party makeup look by Barsha",
    category: "Party",
    title: "Party Look",
  },
  {
    src: "/images/real-barsha-portrait.png",
    alt: "Barsha makeup artist portrait",
    category: "Party",
    title: "Makeup Artist Look",
  },
  {
    src: "/images/real-hair-spa.png",
    alt: "Hair spa treatment result - silky straight hair",
    category: "Hair",
    title: "Hair Spa Result",
  },
  {
    src: "/images/real-hair-flowers.png",
    alt: "Bridal hair styling with flowers",
    category: "Hair",
    title: "Floral Bridal Hair",
  },
  {
    src: "/images/real-hair-styling.png",
    alt: "Professional hair styling",
    category: "Hair",
    title: "Sleek Hair Styling",
  },
  {
    src: "/images/service-bridal.png",
    alt: "Bridal eye makeup closeup",
    category: "Bridal",
    title: "Bridal Eye Glamour",
  },
  {
    src: "/images/service-mehendi.png",
    alt: "Mehendi design on hand",
    category: "Mehendi",
    title: "Intricate Mehendi Art",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Engagement makeup look",
    category: "Engagement",
    title: "Romantic Engagement Look",
  },
  {
    src: "/images/service-facial.png",
    alt: "Facial treatment spa",
    category: "Skincare",
    title: "Luxury Facial Treatment",
  },
];

const categories = ["All", "Bridal", "Party", "Engagement", "Hair", "Mehendi", "Skincare"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="pt-20">
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />
            Gallery
            <div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our Work<br />
            <span className="italic text-primary">Speaks for Itself</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Real transformations by Barsha — browse our portfolio of bridal looks, party makeovers, and beauty work.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === c
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-card-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
                data-testid={`button-filter-${c.toLowerCase()}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setLightboxImage(item)}
                data-testid={`img-gallery-${i}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge variant="secondary" className="text-xs mb-1.5 bg-white/20 text-white border-0 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No photos in this category yet.
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
            data-testid="button-lightbox-close"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-2xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-full object-contain rounded-xl"
              data-testid="img-lightbox"
            />
            <p className="text-white/80 text-sm text-center mt-3">{lightboxImage.title}</p>
          </div>
        </div>
      )}

      <section className="py-16 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Want a Look Like These?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book your appointment today and let Barsha create your perfect look.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/booking">
              <button
                className="px-8 py-3 bg-primary text-white rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                data-testid="button-gallery-book"
              >
                Book an Appointment
              </button>
            </a>
            <a
              href="https://wa.me/8801739631389"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-gallery-whatsapp"
              className="px-8 py-3 border border-border rounded-md font-medium text-sm text-foreground hover:border-primary/50 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
