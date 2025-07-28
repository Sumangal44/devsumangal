import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function SocialIcons() {
  const iconClass =
    "w-6 h-6 text-muted-foreground hover:text-foreground transition-colors";

  return (
    <nav
      aria-label="Social media links"
      className="flex justify-center md:justify-start gap-6 mt-6"
    >
      <a
        href="https://github.com/Avhishikta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className={iconClass} title="GitHub" />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter className={iconClass} title="Twitter" />
      </a>
      <a
        href="https://linkedin.com/in/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className={iconClass} title="LinkedIn" />
      </a>
      <a href="mailto:avhishiktamaiti@gmail.com" aria-label="Email">
        <Mail className={iconClass} title="Email" />
      </a>
    </nav>
  );
}
