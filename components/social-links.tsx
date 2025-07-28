import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SocialLinksProps {
  variant?: "default" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function SocialLinks({ variant = "ghost", size = "icon", className = "" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Pearlgrowth", 
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pearl-wangui-7ba832283/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:wanguipearl1@gmail.com",
      icon: Mail,
      color: "hover:text-purple-400",
    },
  ]

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant={variant}
          size={size}
          asChild
          className={`text-slate-400 ${link.color} transition-all duration-300 hover:scale-110 hover:bg-slate-800/50`}
        >
          <Link
            href={link.href}
            target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={link.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </div>
  )
}
