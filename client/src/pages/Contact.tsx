import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+880 1739-631389",
    sub: "Available Sat–Thu, 10AM–8PM",
    action: "tel:+8801739631389",
    label: "Call Now",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "+880 1739-631389",
    sub: "Quick responses via WhatsApp",
    action: "https://wa.me/8801739631389",
    label: "Chat Now",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Facebook,
    title: "Facebook",
    detail: "Dream Look Makeover",
    sub: "Follow us for updates & offers",
    action: "https://www.facebook.com/share/1B4SnLU7Zp/",
    label: "Follow Us",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Instagram,
    title: "Instagram",
    detail: "@dreamlookmakeover",
    sub: "See our latest work",
    action: "https://www.instagram.com",
    label: "Follow Us",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export default function Contact() {
  return (
    <main className="pt-20">
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />
            Contact Us
            <div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Get in Touch<br />
            <span className="italic text-primary">We'd Love to Help</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our services or want to discuss your requirements? Reach out to us and we'll be happy to assist you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="p-6 border-card-border text-center hover-elevate"
                data-testid={`card-contact-${method.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`w-14 h-14 rounded-full ${method.color} flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm font-medium text-foreground/90 mb-1">{method.detail}</p>
                <p className="text-xs text-muted-foreground mb-4">{method.sub}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={`link-${method.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Button variant="outline" size="sm" className="gap-1 w-full">
                    {method.label} <ArrowRight className="w-3 h-3" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-5">
                <div className="w-8 h-px bg-primary" />
                Visit Us
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Studio Location
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-0.5">Address</div>
                    <div className="text-muted-foreground text-sm">
                      College Row, 1st Lane<br />
                      Barishal, Bangladesh
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-0.5">Phone</div>
                    <a href="tel:+8801739631389" className="text-primary text-sm hover:underline">
                      +880 1739-631389
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Working Hours</div>
                    <div className="text-sm space-y-0.5">
                      <div className="text-muted-foreground">Saturday – Thursday: <span className="text-foreground">10:00 AM – 8:00 PM</span></div>
                      <div className="text-muted-foreground">Friday: <span className="text-foreground">By Appointment Only</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/booking">
                <Button className="gap-2" data-testid="button-contact-book">
                  Book an Appointment <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-card-border" data-testid="div-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0000000000005!2d90.37!3d22.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754901efc9fc7b5%3A0x78b2a9b3a6c7c7e6!2sBarishal%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dream Look Makeover Location"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                q: "How far in advance should I book?",
                a: "For bridal makeup, book 1–3 months ahead. For parties, 1–2 weeks in advance is ideal. Urgent appointments available based on availability.",
              },
              {
                q: "Do you offer home service?",
                a: "Yes, we offer home service for bridal and special occasion makeup within Barishal. Please call to discuss details and pricing.",
              },
              {
                q: "What products do you use?",
                a: "We use professional-grade, skin-friendly makeup brands. Products are selected for their quality, longevity, and suitability for all skin types.",
              },
              {
                q: "How long does bridal makeup take?",
                a: "Bridal makeup typically takes 2–3 hours. We recommend arriving early or booking a trial session beforehand.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="p-5 border-card-border"
                data-testid={`card-faq-${i}`}
              >
                <h3 className="font-semibold text-foreground mb-2 text-sm">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
