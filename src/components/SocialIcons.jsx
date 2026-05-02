import {FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialIcons() {
  const iconClass =
    "w-6 h-6 text-muted-foreground hover:text-foreground transition-colors";

  return (
    <nav
      aria-label="Social media links"
      className="flex justify-center md:justify-start gap-6 mt-6"
    >
      <a
        href="https://github.com/sumangal44"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className={iconClass} title="GitHub" />
      </a>
      <a
        href="https://twitter.com/SumangalKaran"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className={iconClass} title="Twitter" />
      </a>
      <a
        href="https://linkedin.com/in/sumangal-karan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className={iconClass} title="LinkedIn" />
      </a>
      <a href="mailto:sumangalkaran44@gmail.com" aria-label="Email">
        <FaEnvelope className={iconClass} title="Email" />
      </a>
    </nav>
  );
}
