import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ProjectCard } from '@/components/project-card';
import Footer from '@/components/footer';
import Image from 'next/image';
import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full">
          <div className="container mx-auto px-4 py-24 sm:py-32">
            <div className="mx-auto text-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I'm <span className="text-accent">Neil Moon</span>
                </h1>
                <p className="mx-auto max-w-lg text-xl text-muted-foreground">
                  I build software full-stack, focusing on developing products that customers love.
                </p>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {/* <Button asChild size="lg" className="gap-2">
                  <Link href="#contact">
                    See my experience
                    <Icons.arrowRight className="h-4 w-4" />
                  </Link>
                </Button> */}
                {/* <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="#projects">
                    View My Work
                    <Icons.arrowRight className="h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-muted/10 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    About Me
                    <span className="block h-1 w-20 bg-accent mx-auto mt-4 mb-8 rounded-full" />
                  </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-12 items-start">
                  <div className="md:col-span-5">
                    <div className="relative h-96 w-full rounded-xl overflow-hidden border-2 border-accent/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
                      <Image src="/face26.jpg" alt="Me" className="h-full w-full object-cover" width={324} height={324} />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Link href="/about">
                        <Button variant="outline">
                          Learn More <Icons.arrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        I'm a passionate software engineer with 4.5 years of experience, including 2.5 years at Google and 2 years as the sole engineer at ParentHero, a pre-seed startup.
                      </p>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">At ParentHero</h3>
                        <p>
                          As the sole engineer, I was responsible for the entire tech stack:
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-foreground/80">
                          <li>TypeScript/React/Next frontend</li>
                          <li>PayloadCMS/TypeScript backend</li>
                          <li>AWS infrastructure</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
                        <ul className="space-y-3 list-disc list-inside text-foreground/80">
                          <li>
                            Created several trackers for parents to track their children's development, including sleep, solids, growth, vaccines, postpartum, and pregnancy.
                          </li>
                          <li>
                            Built a complex recommendation system that surfaces highly relevant articles by analyzing data from the parenting related trackers
                          </li>
                          <li>
                            Developed an LLM chat interface that provides verified parenting information by sourcing from vetted online resources
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
              <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="This website"
                  description="My personal website built to showcase my work and projects."
                  tags={['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare']}
                  githubUrl="https://github.com/Inei1/neil-moon.com"
                />
                <ProjectCard
                  title="TuringTestChat"
                  description="A (defunct) LLM chat game where two users or an LLM and a user chat with each other, determining whether the other chatter is an LLM."
                  tags={['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'GCP']}
                  githubUrl="https://github.com/Inei1/TuringTestChat-Frontend"
                />
              </div>
              {/* <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="#projects">
                  See All
                  <Icons.arrowRight className="h-4 w-4" />
                </Link>
              </Button> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="w-full bg-muted/20 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
              <div className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                <div className="mx-auto max-w-3xl space-y-8">
                  <div className="space-y-2 text-center">
                    <p className="text-muted-foreground">
                      Have a project in mind or want to chat? Feel free to reach out!
                    </p>
                  </div>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="email"
                          placeholder="your@email.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="subject"
                        placeholder="How can I help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="message"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
