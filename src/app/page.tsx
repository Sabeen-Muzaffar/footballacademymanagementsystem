import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Goal, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-background/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Goal className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">FootyPro Hub</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#features" className="hidden md:block text-sm font-medium hover:text-primary">Features</Link>
          <Link href="#about" className="hidden md:block text-sm font-medium hover:text-primary">About</Link>
          <Link href="#testimonials" className="hidden md:block text-sm font-medium hover:text-primary">Testimonials</Link>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
            <Image 
                src="https://placehold.co/1200x600.png" 
                alt="Hero" 
                layout="fill" 
                objectFit="cover" 
                className="opacity-20"
                data-ai-hint="soccer action"
            />
            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                    The Future of Football Management
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
                    FootyPro Hub is the all-in-one platform to connect players, coaches, and parents. Elevate your game with cutting-edge tools and insights.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/login">Get Started</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#features">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">Why Choose FootyPro Hub?</h2>
            <p className="text-muted-foreground text-center mt-2 mb-12">Powerful features for every role in the academy.</p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle>For Everyone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Seamless communication, scheduling, and progress tracking for parents, players, and coaches.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                   <Star className="w-8 h-8 text-primary" />
                  <CardTitle>For Players</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>AI-powered tips, video analysis, and gamified achievements to keep you motivated and improving.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <CardTitle>For Coaches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Plan sessions, track attendance, grade performance, and use a tactical board to strategize.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Our Academy</h2>
              <p className="text-muted-foreground">
                We are dedicated to nurturing the next generation of football talent. Our state-of-the-art facilities and world-class coaching staff provide an unparalleled environment for growth and development. We believe in a holistic approach, focusing on skill, strategy, and sportsmanship.
              </p>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Academy"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="soccer academy"
            />
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">What Our Members Say</h2>
             <p className="text-muted-foreground text-center mt-2 mb-12">Real stories from our community.</p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <p>"FootyPro Hub has revolutionized how I track my son's progress. The insights are incredible!"</p>
                <p className="font-semibold mt-4">- A Proud Parent</p>
              </Card>
              <Card className="p-6">
                <p>"The AI tips are a game-changer. I can see exactly what I need to work on after every match."</p>
                <p className="font-semibold mt-4">- Alex, U14 Player</p>
              </Card>
              <Card className="p-6">
                <p>"Managing my team has never been easier. Attendance, grading, communication... it's all in one place."</p>
                <p className="font-semibold mt-4">- Coach David</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 border-t bg-card">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">&copy; 2024 FootyPro Hub. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                  <Link href="#" className="text-sm hover:text-primary">Privacy Policy</Link>
                  <Link href="#" className="text-sm hover:text-primary">Terms of Service</Link>
              </div>
          </div>
      </footer>
    </div>
  );
}
