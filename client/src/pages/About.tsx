import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Heart, Star, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const achievements = [
  "500+ Happy Brides",
  "5+ Years of Experience",
  "1000+ Successful Makeovers",
  "Premium Beauty Products",
  "Trained Makeup Artist",
  "Personalized Service",
];

const milestones = [
  {
    year: "2018",
    title: "Founded Dream Look",
    desc: "Started the journey with passion for beauty and makeup artistry in Barishal.",
  },
  {
    year: "2019",
    title: "First 100 Brides",
    desc: "Reached the milestone of 100 happy brides and expanded service offerings.",
  },
  {
    year: "2021",
    title: "Professional Training",
    desc: "Completed advanced bridal and editorial makeup courses to elevate our skills.",
  },
  {
    year: "2024",
    title: "500+ Happy Clients",
    desc: "Proud to have served over 500 satisfied clients across Barishal.",
  },
];

export default function About() {
  return (
    <main className="pt-20">
      <section className="relative py-24 px-4 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about-barsha.png')" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />
            Our Story
            <div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            About Dream Look<br />
            <span className="italic text-primary">Makeover by Barsha</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A story of passion, artistry, and dedication to making every woman feel beautiful and confident on her most special days.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="/images/about-barsha.png"
                  alt="Barsha - Professional Makeup Artist"
                  className="w-full h-full object-cover"
                  data-testid="img-about-barsha"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-primary/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/5 rounded-full" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                <div className="w-8 h-px bg-primary" />
                Meet the Artist
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight">
                Barsha — Your Trusted<br />
                <span className="italic text-primary">Beauty Artist</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 5 years of experience in bridal and special occasion makeup, Barsha has built a reputation for creating breathtaking, personalized looks that highlight each client's unique natural beauty.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trained in professional makeup artistry with expertise in skin care, hair styling, and mehendi design, Barsha brings a holistic approach to beauty. Her warm personality and attention to detail make every client feel comfortable and confident.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {achievements.map((a) => (
                  <div key={a} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{a}</span>
                  </div>
                ))}
              </div>
              <Link href="/booking">
                <Button className="gap-2" data-testid="button-about-book">
                  Book with Barsha <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Our Values
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Mission & Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-card-border" data-testid="card-mission">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To enhance the natural beauty of every client through professional, personalized makeup and beauty services. We believe every woman deserves to feel beautiful and confident, especially on her most important occasions.
              </p>
            </Card>
            <Card className="p-8 border-card-border" data-testid="card-vision">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and beloved beauty destination in Barishal — a place where every woman leaves feeling like the most beautiful version of herself. We envision a studio where artistry meets care.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Our Journey
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Milestones & Achievements
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 mb-8" data-testid={`milestone-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">{m.year}</span>
                  <h3 className="font-display font-semibold text-lg text-foreground mt-1 mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5">
            Ready to Experience<br />
            <span className="italic text-primary">Dream Look Quality?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book an appointment today and discover why hundreds of women trust Dream Look Makeover for their most important occasions.
          </p>
          <Link href="/booking">
            <Button size="lg" className="px-10 gap-2" data-testid="button-about-cta">
              Book Your Appointment <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
