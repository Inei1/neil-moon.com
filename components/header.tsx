import Link from "next/link"
import { Icons } from "./icons"

const Footer = () => {
    return (
        <header className="sticky px-8 top-0 z-40 w-full bg-neutral-800 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold">Neil Moon</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/about" className="text-sm font-medium hover:text-foreground/80 transition-colors">
                            About
                        </Link>
                        {/* <Link href="#projects" className="text-sm font-medium hover:text-foreground/80 transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-sm font-medium hover:text-foreground/80 transition-colors">
                            Contact
                        </Link> */}
                    </nav>
                </div>
                {/* <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button asChild variant="outline" size="sm" className="ml-2">
                      <Link href="#contact">Get in touch</Link>
                    </Button>
                  </div> */}
            </div>
        </header>
    )
}

export default Footer;