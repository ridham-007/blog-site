"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const ThemeToggle = ({
  onThemeLoad,
}: {
  onThemeLoad: (loaded: boolean) => void;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
    onThemeLoad(true);
  }, [onThemeLoad]);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    setIsDarkMode(!isDarkMode);
    localStorage.setItem("data-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="fixed bottom-10 right-10 cursor-pointer">
      {isDarkMode ? (
        <FaMoon
          className="bg-own_text_primary text-own_black_color_primary text-[50px] rounded-full p-2 transition-transform duration-500 ease-in-out transform hover:scale-125 hover:cursor-pointer"
          onClick={toggleDarkMode}
          title="Switch to Light Mode"
        />
      ) : (
        <MdSunny
          className="bg-own_bg_black_color_secondary text-own_black_color_primary text-[50px] rounded-full p-2 transition-transform duration-500 ease-in-out transform hover:scale-125 hover:cursor-pointer"
          onClick={toggleDarkMode}
          title="Switch to Dark Mode"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
