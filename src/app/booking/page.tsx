"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Phone, MessageCircle, Clock, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Engagement Makeup",
  "Facial Treatment",
  "Hair Styling",
  "Hair Spa & Rebonding",
  "Mehendi Design",
  "Skin Care Treatment",
  "Other / Consultation",
];

export default function Booking() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", service: "", date: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: BookingForm) => {
      return apiRequest("POST", "/api/appointments", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingForm) => mutation.mutate(data);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <main className="pt-20">
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />Appointments<div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Book Your Beauty<br /><span className="italic text-primary">Appointment Today</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in the form below and we'll confirm your appointment. You can also reach us directly via phone or WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              {submitted ? (
                <Card className="p-10 border-card-border text-center" data-testid="booking-success">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Appointment Request Sent!</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Thank you for booking with Dream Look Makeover! We'll confirm your appointment shortly via phone call or WhatsApp.
                  </p>
                  <div className="bg-primary/5 rounded-xl p-4 mb-6 text-sm text-muted-foreground">
                    If you don't hear from us within 24 hours, please call us at{" "}
                    <a href="tel:+8801951592999" className="text-primary font-medium">+880 1951-592999</a>
                  </div>
                  <Button onClick={() => setSubmitted(false)} variant="outline" data-testid="button-book-another">
                    Book Another Appointment
                  </Button>
                </Card>
              ) : (
                <Card className="p-8 border-card-border" data-testid="card-booking-form">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground">Appointment Details</h2>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="01XXXXXXXXX" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Service *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Choose a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((s) => (
                                  <SelectItem key={s} value={s}>{s}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Date *</FormLabel>
                            <FormControl>
                              <Input type="date" min={minDate} {...field} data-testid="input-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your occasion, special requests, or any questions..."
                                rows={3}
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" size="lg" disabled={mutation.isPending} data-testid="button-submit-booking">
                        {mutation.isPending ? "Sending..." : "Book My Appointment"}
                      </Button>
                    </form>
                  </Form>
                </Card>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              <Card className="p-6 border-card-border" data-testid="card-contact-info">
                <h3 className="font-display font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="tel:+8801951592999" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Call Us</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">+880 1951-592999</div>
                    </div>
                  </a>
                  <a href="https://wa.me/8801951592999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">WhatsApp</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-green-600 transition-colors">Chat with us</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                      <div className="text-sm font-medium text-foreground">College Row, 1st Lane,<br />Barishal, Bangladesh</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-card-border" data-testid="card-working-hours">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Working Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Saturday – Thursday", hours: "10:00 AM – 8:00 PM" },
                    { day: "Friday", hours: "By Appointment" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between gap-2">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-card-border bg-primary/5" data-testid="card-booking-tips">
                <h3 className="font-semibold text-foreground text-sm mb-3">Booking Tips</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {[
                    "Book at least 1 week in advance for special occasions",
                    "Bridal bookings should be made 1–3 months early",
                    "A trial session is recommended for brides",
                    "Share reference photos for best results",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
