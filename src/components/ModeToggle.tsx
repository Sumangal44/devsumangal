import * as React from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    document.documentElement.classList.toggle("dark", newIsDark);
    setIsDarkMode(newIsDark);
  };

  return (
    <span
      onClick={toggleTheme}
      className="cursor-pointer transition-transform hover:scale-110"
      title="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      )}
    </span>
  );
}
