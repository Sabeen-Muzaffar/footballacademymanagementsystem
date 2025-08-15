
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Goal, ShieldCheck, Star, Users, Twitter, Instagram, Facebook, Award, BrainCircuit, Dumbbell, Video, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
          <Link href="#events" className="text-sm font-medium hover:text-primary">Events</Link>
          <Link href="#coaches" className="text-sm font-medium hover:text-primary">Coaches</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
        <nav className="md:hidden">
             <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
            <Image 
                src="/main.jpg" 
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
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Our Academy</h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are dedicated to nurturing the next generation of football talent. Our state-of-the-art facilities and world-class coaching staff provide an unparalleled environment for growth and development. We believe in a holistic approach, focusing on skill, strategy, and sportsmanship.
              </p>
            </div>
            <div className="mx-auto mt-12 grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-2">
                 <Image
                    src="/1.jpg"
                    alt="Academy Facility"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    data-ai-hint="soccer academy"
                />
              </div>
              <div className="grid gap-2">
                 <Image
                    src="/2.jpg"
                    alt="Young players training"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    data-ai-hint="youth soccer"
                />
              </div>
               <div className="grid gap-2">
                 <Image
                    src="/3.jpg"
                    alt="Coaching session"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    data-ai-hint="soccer coaching"
                />
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Award className="w-8 h-8 text-primary" />
                        <CardTitle>Professional Coaching</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>Our UEFA licensed coaches bring a wealth of experience from top-tier football to provide elite training.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <BrainCircuit className="w-8 h-8 text-primary" />
                        <CardTitle>Personalized Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>Using AI analytics, we create tailored development plans that focus on each player's unique strengths and weaknesses.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Dumbbell className="w-8 h-8 text-primary" />
                        <CardTitle>Advanced Fitness Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>Our fitness regimens are designed based on sports science to optimize player stamina, speed, and agility.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Video className="w-8 h-8 text-primary" />
                        <CardTitle>Tactical & Video Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>In-depth reviews of match footage help players understand tactical nuances and improve decision-making.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <CardTitle>Pathway to Pro</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>We have a strong network with professional clubs and scouts, providing a clear pathway for talented players.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Users className="w-8 h-8 text-primary" />
                        <CardTitle>Holistic Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>We focus not just on football skills, but also on instilling values like discipline, teamwork, and sportsmanship.</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
            <p className="text-muted-foreground text-center mt-2 mb-12">Join us for our next big event and showcase your talent.</p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="flex flex-col justify-center p-6 text-center">
                          <CardHeader>
                              <CardTitle>Youth Summer Camp</CardTitle>
                              <CardDescription>August 5-9, 2024</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <p>An intensive week of training for aspiring young players focusing on skills and teamwork.</p>
                          </CardContent>
                          <CardFooter className="justify-center">
                              <Button>Register Now</Button>
                          </CardFooter>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                       <div className="flex flex-col justify-center p-6 text-center">
                          <CardHeader>
                              <CardTitle>Annual Club Tournament</CardTitle>
                              <CardDescription>September 1-3, 2024</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <p>Compete against the best teams in the region and prove your skills on the big stage.</p>
                          </CardContent>
                          <CardFooter className="justify-center">
                              <Button>Learn More</Button>
                          </CardFooter>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                       <div className="flex flex-col justify-center p-6 text-center">
                          <CardHeader>
                              <CardTitle>Scouting Day</CardTitle>
                              <CardDescription>October 12, 2024</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <p>An open trial day for talented players to get scouted by professional clubs and coaches.</p>
                          </CardContent>
                          <CardFooter className="justify-center">
                              <Button>Get Notified</Button>
                          </CardFooter>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
        </section>


        <section id="coaches" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center">Meet Our Expert Coaches</h2>
                <p className="text-muted-foreground text-center mt-2 mb-12">World-class mentors dedicated to your success.</p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="text-center p-6">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person portrait" />
                            <AvatarFallback>DS</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl">David Smith</CardTitle>
                        <p className="text-primary font-semibold">Head Coach, U14s</p>
                        <CardContent className="mt-4">
                            <p>With over 15 years of coaching experience and a UEFA 'A' License, David specializes in tactical development and player psychology.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6">
                         <Avatar className="w-24 h-24 mx-auto mb-4">
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person portrait" />
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl">Sarah Chen</CardTitle>
                        <p className="text-primary font-semibold">Technical Skills Coach</p>
                        <CardContent className="mt-4">
                            <p>A former professional player, Sarah focuses on honing individual technical skills, including dribbling, passing, and shooting precision.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6">
                         <Avatar className="w-24 h-24 mx-auto mb-4">
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person portrait" />
                            <AvatarFallback>ML</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl">Michael Lee</CardTitle>
                        <p className="text-primary font-semibold">Goalkeeping Specialist</p>
                        <CardContent className="mt-4">
                            <p>Michael brings a modern approach to goalkeeping, emphasizing agility, distribution, and commanding the penalty area.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
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

        <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-3xl font-bold text-center">Our Partners & Sponsors</h2>
             <p className="text-muted-foreground text-center mt-2 mb-12">We are proud to collaborate with leading brands in the sports industry.</p>
             <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                <Image src="https://placehold.co/150x60.png" width={150} height={60} alt="Sponsor Logo" data-ai-hint="logo" />
                <Image src="https://placehold.co/150x60.png" width={150} height={60} alt="Sponsor Logo" data-ai-hint="logo" />
                <Image src="https://placehold.co/150x60.png" width={150} height={60} alt="Sponsor Logo" data-ai-hint="logo" />
                <Image src="https://placehold.co/150x60.png" width={150} height={60} alt="Sponsor Logo" data-ai-hint="logo" />
                <Image src="https://placehold.co/150x60.png" width={150} height={60} alt="Sponsor Logo" data-ai-hint="logo" />
             </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 border-t bg-card">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">&copy; 2024 FootyPro Hub. All rights reserved.</p>
              </div>
              <div className="flex gap-4 items-center">
                  <Link href="#" className="text-sm hover:text-primary">Privacy Policy</Link>
                  <Link href="#" className="text-sm hover:text-primary">Terms of Service</Link>
                   <div className="flex gap-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5" /></Link>
                    </div>
              </div>
          </div>
      </footer>
    </div>
  );
}
