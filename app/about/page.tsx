import Footer from '@/components/footer';
import Image from 'next/image';
import Header from '@/components/header';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
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
                                    </div>

                                    <div className="md:col-span-7 space-y-6">
                                        <div className="space-y-4 text-muted-foreground">
                                            <p className="text-lg leading-relaxed">
                                                I'm a passionate software engineer with 4.5 years of experience, including 2.5 years at Google and 2 years as the sole engineer at ParentHero, a pre-seed startup.
                                            </p>

                                            <div className="space-y-2">
                                                <h3 className="text-xl font-semibold text-foreground">Education</h3>
                                                <p className="leading-relaxed">
                                                    I started my journey of becoming a software engineer at Ohlone College, where I studied Computer Science with a 4.00 GPA.
                                                    After getting my Asscociate's degree, I went to California State University, East Bay, where I finished my Bachelor's degree.
                                                    I maintained my 4.00 GPA and graduated with my Bachelor's degree in Computer Science.
                                                </p>
                                                <p className="leading-relaxed">
                                                    While at CSUEB, I interned at Amazon as a Software Development Engineer Intern.
                                                    I worked with the ASCS (Amazon Selection and Catalog Systems) team to build a system that helps validate Amazon's catalog.
                                                    It collected data on the entire Amazon catalog, and produced a report which highlights any values that are likely to be inaccurate.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground">Professional Experience</h3>
                                    <p className="leading-relaxed">
                                        After graduating from CSUEB, I joined Google as an Engineering Resident and later converted to fulltime.
                                        During my rotations, I built one system that automated a marketing email workflow process that previously required manual effort.
                                        I also built an integration test report generator, which required me to reverse-engineer a deprecated system to understand the source of truth.
                                        After converting to fulltime, I worked on a large SQL-based pipeline used to determine Google's datacenter pricing.
                                        The pipeline processed millions of rows daily and was used by the cross-functional finance team for forecasts covering billions of dollars in hardware costs.
                                        My software was required to be highly reliable, as any errors could result in delayed or incorrect purchasing decisions.
                                    </p>
                                    <p className="leading-relaxed">
                                        After Google, I joined ParentHero, a pre-seed healthcare startup, as the sole engineer.
                                        My responsibility was to develop the entire product from the ground up, including frontend, backend, infrastructure, security, analytics, payments, and AI features.
                                        The product supported parents from pregnancy through early childhood and included complex tracking systems, personalized content recommendations, analytics dashboards, media delivery (audio and video), and an LLM-powered chat experience with source citations.
                                        I also handled cloud infrastructure, data privacy protections, subscription payments, and a B2B employer licensing model.
                                        While ParentHero ultimately did not achieve product-market fit, the role gave me deep experience owning and shipping real-world systems under tight constraints, making tradeoffs between speed and quality, and building products holistically from idea to production.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
