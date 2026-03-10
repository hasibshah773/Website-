import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    image: "/images/service-bridal.png",
    price: "From ৳3,500",
    badge: "Most Popular",
    description:
      "Make your wedding day unforgettable with a flawless bridal makeup look. Our bridal makeup is carefully crafted to be long-lasting, photogenic, and perfectly matched to your skin tone and personal style.",
    includes: [
      "Full face professional makeup",
      "Eye makeup with lashes",
      "Lip art & contouring",
      "Setting for long-lasting wear",
      "Pre-bridal consultation",
    ],
    category: "Bridal",
  },
  {
    id: "party",
    title: "Party Makeup",
    image: "/images/service-party.png",
    price: "From ৳1,200",
    description:
      "Stand out at any party or celebration with a glamorous, vibrant makeup look. From subtle glam to bold and dramatic, we create looks that complement your outfit and occasion.",
    includes: [
      "Foundation & skin preparation",
      "Customized eye look",
      "Blush & highlight",
      "Lip color",
      "Setting spray",
    ],
    category: "Special Occasions",
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    image: "/images/service-engagement.png",
    price: "From ৳2,000",
    badge: "Popular",
    description:
      "Look radiant and romantic for your engagement ceremony. Our engagement makeup focuses on creating a fresh, glowing look that photographs beautifully.",
    includes: [
      "Skin prep & primer",
      "Natural glow foundation",
      "Romantic eye look",
      "Soft lip color",
      "Contouring & highlight",
    ],
    category: "Bridal",
  },
  {
    id: "facial",
    title: "Facial Treatment",
    image: "/images/service-facial.png",
    price: "From ৳800",
    description:
      "Treat your skin to a relaxing and rejuvenating facial treatment. Our customized facials cleanse, exfoliate, and nourish your skin to give you a radiant, healthy glow.",
    includes: [
      "Deep cleansing",
      "Exfoliation treatment",
      "Steam & extraction",
      "Face massage",
      "Moisturizing mask",
    ],
    category: "Skincare",
  },
  {
    id: "hair",
    title: "Hair Styling",
    image: "/images/service-hair.png",
    price: "From ৳600",
    description:
      "Complete your look with a professional hairstyle. From elegant updos for brides to flowing curls for parties, our hair styling services complement any occasion.",
    includes: [
      "Wash & blow dry",
      "Curling or straightening",
      "Elegant updos",
      "Braids & plaits",
      "Hair accessories styling",
    ],
    category: "Hair",
  },
  {
    id: "mehendi",
    title: "Mehendi Design",
    image: "/images/service-mehendi.png",
    price: "From ৳500",
    description:
      "Adorn your hands and feet with intricate, beautiful mehendi designs. From traditional to contemporary patterns, our expert mehendi artist creates stunning designs for all occasions.",
    includes: [
      "Both hands design",
      "Traditional patterns",
      "Modern Arabic designs",
      "Bridal special mehendi",
      "After-care advice",
    ],
    category: "Traditional",
  },
  {
    id: "skincare",
    title: "Skin Care Treatment",
    image: "/images/service-facial.png",
    price: "From ৳1,000",
    description:
      "Advanced skincare treatments to address specific concerns like pigmentation, acne, or dullness. Our treatments use professional-grade products to transform your skin health.",
    includes: [
      "Skin analysis",
      "Deep moisturizing",
      "Anti-aging treatment",
      "Brightening therapy",
      "Customized care plan",
    ],
    category: "Skincare",
  },
];

const categories = ["All", "Bridal", "Special Occasions", "Skincare", "Hair", "Traditional"];

export default function Services() {
  return (
    <main className="pt-20">
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />
            Our Services
            <div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Professional Beauty<br />
            <span className="italic text-primary">Services for You</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From bridal makeup to skincare treatments, we offer a complete range of beauty services tailored to help you look and feel your absolute best.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="px-4 py-1.5 text-sm cursor-default"
                data-testid={`badge-category-${c.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {c}
              </Badge>
            ))}
          </div>
          <div className="space-y-12">
            {services.map((service, i) => (
              <Card
                key={service.id}
                className="overflow-hidden border-card-border"
                data-testid={`card-service-${service.id}`}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs tracking-wide">
                        {service.category}
                      </Badge>
                      {service.badge && (
                        <Badge className="text-xs bg-primary text-primary-foreground">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-xl font-display font-bold text-primary">{service.price}</span>
                      <Link href="/booking">
                        <Button className="gap-2" data-testid={`button-book-${service.id}`}>
                          Book Now <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <a href="tel:+8801739631389">
                        <Button variant="outline" className="gap-2">
                          <Phone className="w-4 h-4" /> Call Us
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5">
            Not Sure Which Service?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Contact us for a free consultation and let us suggest the perfect service for your occasion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="px-8 gap-2" data-testid="button-services-book">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="https://wa.me/8801739631389" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-services-whatsapp">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
