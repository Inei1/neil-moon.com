import { Github, Linkedin, Mail, Twitter, Code, ArrowRight, User, Moon, Sun, CheckCircle, Award, ExternalLink } from "lucide-react"

export const Icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  code: Code,
  arrowRight: ArrowRight,
  user: User,
  moon: Moon,
  sun: Sun,
  checkCircle: CheckCircle,
  award: Award,
  externalLink: ExternalLink,
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
}
