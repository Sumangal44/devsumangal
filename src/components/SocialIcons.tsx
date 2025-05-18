import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function SocialIcons() {
  const iconClass = "w-6 h-6 text-muted-foreground hover:text-foreground transition-colors";

  return (
    <div className="flex justify-center md:justify-start gap-6 mt-6">
      <a href="https://github.com/sumangal44" target="_blank" rel="noopener noreferrer">
        <Github className={iconClass} />
      </a>
      <a href="https://twitter.com/SumangalKaran" target="_blank" rel="noopener noreferrer">
        <Twitter className={iconClass} />
      </a>
      <a href="https://linkedin.com/in/sumangal-karan" target="_blank" rel="noopener noreferrer">
        <Linkedin className={iconClass} />
      </a>
      <a href="mailto:sumangalkaran44@gmail.com">
        <Mail className={iconClass} />
      </a>
    </div>
  );
}
