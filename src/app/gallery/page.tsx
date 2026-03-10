"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const galleryItems = [
  { src: "/images/real-bridal-red-after.png", title: "Bridal Red Look", category: "Bridal" },
  { src: "/images/real-gold-glitter.png", title: "Gold Glitter Look", category: "Party" },
  { src: "/images/real-bridal-elegant.png", title: "Elegant Bridal", category: "Bridal" },
  { src: "/images/real-party-clients.png", title: "Party Clients", category: "Party" },
  { src: "/images/real-hair-flowers.png", title: "Floral Hair Style", category: "Hair" },
  { src: "/images/real-bridal-lavender.png", title: "Lavender Bridal", category: "Bridal" },
  { src: "/images/real-bridal-red.png", title: "Bridal Red Glam", category: "Bridal" },
  { src: "/images/real-hair-styling.png", title: "Hair Styling", category: "Hair" },
  { src: "/images/real-party-barsha.png", title: "Party Look by Barsha", category: "Party" },
  { src: "/images/real-hair-spa.png", title: "Hair Spa Result", category: "Hair" },
  { src: "/images/real-barsha-portrait.png", title: "Makeup Artist Barsha", category: "Behind the Scenes" },
];

const categories = ["All", "Bridal", "Party", "Hair", "Behind the Scenes"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <main className="pt-20">
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />Our Work<div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Beauty Portfolio &<br /><span className="italic text-primary">Client Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore real transformations and client looks — each image tells a story of beauty, confidence, and artistry.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                className="px-4 py-1.5 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setActiveCategory(cat)}
                data-testid={`badge-gallery-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(i)}
                data-testid={`img-gallery-${i}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">{item.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="div-lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={closeLightbox}
            data-testid="button-lightbox-close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              data-testid="img-lightbox"
            />
            <div className="text-center mt-3">
              <p className="text-white font-medium">{filtered[lightboxIndex].title}</p>
              <Badge variant="secondary" className="mt-1">{filtered[lightboxIndex].category}</Badge>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-5">
            Want a Look Like This?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book an appointment and let our makeup artist Barsha create your dream look.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/booking">
              <Button size="lg" className="px-8 gap-2" data-testid="button-gallery-book">Book Now</Button>
            </a>
            <a
              href="https://www.facebook.com/share/1B4SnLU7Zp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" data-testid="button-gallery-facebook">See More on Facebook</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
