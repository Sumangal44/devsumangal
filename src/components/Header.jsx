import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Projects", "About", "services", "Contact"];

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md transition-shadow ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="inline-block text-lg font-bold sm:text-xl">
            Devsumangal
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((label) => {
            const href = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <DialogTitle className="sr-only">
                Mobile Navigation Menu
              </DialogTitle>
              <nav className="flex flex-col gap-3 mt-6">
                {navLinks.map((label) => {
                  const href =
                    label === "Home" ? "/" : `/${label.toLowerCase()}`;
                  return (
                    <a
                      key={label}
                      href={href}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                    >
                      {label}
                    </a>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
