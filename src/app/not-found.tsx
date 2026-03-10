import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-display text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back to exploring our beauty services.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/">
            <Button data-testid="button-404-home">Back to Home</Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline" data-testid="button-404-book">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
