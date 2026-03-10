import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Star,
  ChevronRight,
  Sparkles,
  Award,
  Clock,
  Heart,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Bridal Makeup",
    description: "Flawless, long-lasting bridal looks tailored for your special day.",
    image: "/images/service-bridal.png",
    price: "From ৳3,500",
    icon: "💍",
  },
  {
    title: "Party Makeup",
    description: "Glamorous and vibrant looks perfect for every celebration.",
    image: "/images/service-party.png",
    price: "From ৳1,200",
    icon: "✨",
  },
  {
    title: "Facial Treatment",
    description: "Rejuvenating facials for radiant, glowing skin.",
    image: "/images/service-facial.png",
    price: "From ৳800",
    icon: "🌸",
  },
];

const testimonials = [
  {
    name: "Tasnim Akter",
    role: "Bride",
    quote: "Barsha made me look absolutely stunning on my wedding day. She understood exactly what I wanted and delivered beyond my expectations. Every guest was complimenting my makeup!",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Party Client",
    quote: "I've been going to Dream Look Makeover for all my events. The makeup is always long-lasting and beautiful. Barsha has such a talented hand and a warm, welcoming personality.",
    rating: 5,
  },
  {
    name: "Fatema Begum",
    role: "Engagement Client",
    quote: "I was so nervous for my engagement ceremony, but Barsha calmed me down and made me look like a princess. The makeup lasted all day and I felt so confident!",
    rating: 5,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Makeup Artist",
    desc: "Years of professional experience in bridal and special occasion makeup.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    desc: "Using only high-quality, skin-friendly makeup and beauty products.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    desc: "We understand your schedule and always deliver on time.",
  },
  {
    icon: Heart,
    title: "Personalized Looks",
    desc: "Every look is customized to enhance your unique natural beauty.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bridal.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span className="text-white/90 text-xs tracking-widest uppercase font-medium">Beauty Parlour & Makeup Studio</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Enhance Your<br />
            <span className="italic text-pink-300">Natural Beauty</span>
          </h1>
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Professional bridal and party makeup services in Barishal.<br className="hidden sm:block" />
            Dream Look Makeover by Barsha — where every client becomes a masterpiece.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-white font-semibold px-8" data-testid="button-hero-book">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/10 backdrop-blur-sm font-medium px-8"
                data-testid="button-hero-services"
              >
                Our Services
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-white">500+</div>
              <div className="text-white/70 text-xs tracking-wide">Happy Brides</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-white">5+</div>
              <div className="text-white/70 text-xs tracking-wide">Years Experience</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-white">1000+</div>
              <div className="text-white/70 text-xs tracking-wide">Looks Created</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-9 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                <div className="w-8 h-px bg-primary" />
                About Us
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight">
                Crafting Beauty<br />
                <span className="italic text-primary">Stories in Barishal</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Dream Look Makeover by Barsha is a trusted beauty parlour and makeup studio in the heart of Barishal. We specialize in creating stunning bridal and party looks that enhance your natural beauty and boost your confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With years of professional experience, makeup artist Barsha brings passion, precision, and creativity to every look. Each client is treated with personalized attention to create their perfect appearance.
              </p>
              <Link href="/about">
                <Button variant="outline" className="gap-2" data-testid="button-about-learn">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="/images/about-barsha.png"
                  alt="Makeup artist Barsha at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-xl border border-rose-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">5.0 Rating</div>
                    <div className="text-xs text-muted-foreground">500+ happy clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Services
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Featured Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional beauty services designed to make you look and feel your absolute best for every occasion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="overflow-hidden hover-elevate group cursor-pointer border-card-border"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm">{service.price}</span>
                    <Link href="/services">
                      <Button variant="ghost" size="sm" className="text-primary gap-1 p-0">
                        Learn More <ChevronRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-services">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Why Choose Us
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Dream Look Difference
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We go beyond makeup — we create confidence and help you shine at every special moment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-card border border-card-border hover-elevate"
                data-testid={`card-why-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Gallery
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Recent Work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "/images/gallery-2.png",
              "/images/gallery-3.png",
              "/images/service-bridal.png",
              "/images/gallery-5.png",
              "/images/gallery-6.png",
              "/images/service-party.png",
            ].map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
                data-testid={`img-gallery-preview-${i}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-gallery">
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Testimonials
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="p-6 border-card-border"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bridal.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Look<br />
            <span className="italic text-pink-300">Absolutely Stunning?</span>
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Book your beauty appointment today and let us create your perfect look.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-white px-8" data-testid="button-cta-book">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+8801739631389">
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/10 backdrop-blur-sm gap-2"
                data-testid="button-cta-call"
              >
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/70 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            College Row, 1st Lane, Barishal, Bangladesh
          </div>
        </div>
      </section>
    </main>
  );
}
