import Link from "next/link"
import { Icons } from "./icons"

const Footer = () => {
    return (
        <footer className="border-t px-4">
            <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by Neil Moon. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/Inei1"
                        className="text-muted-foreground bg-black hover:invert hover:text-foreground border border-muted-foreground hover:border-foreground hover:bg-foreground rounded-full h-8 w-8 flex items-center justify-center transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/neil-moon"
                        className="text-muted-foreground bg-black hover:text-foreground hover:invert h-8 w-8 flex items-center justify-center rounded-full border border-muted-foreground hover:border-foreground hover:bg-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;