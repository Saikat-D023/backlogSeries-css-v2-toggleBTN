"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';


export default function LayoutAnimation() {
  const { theme, setTheme, systemTheme } = useTheme();
 
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
   <button
      className="w-28 h-14 bg-neutral-300 dark:bg-neutral-800 rounded-full cursor-pointer p-2 flex items-center transition-colors"
      style={{
      justifyContent: isDark ? "flex-end" : "flex-start",
      }}
      onClick={toggleTheme}
>
  <motion.div
    className="w-10 h-10 bg-yellow-500 dark:bg-purple-400 rounded-full transition-colors"
    layout
    transition={{
      type: "spring",
      duration: 0.4,
      bounce: 0.2,
    }}>
      <div>
        {isDark ? 
        <Moon className="text-white w-8 h-8 pt-2 pl-2" /> : 
        <Sun  className="text-black w-8 h-8 pt-2 pl-2" />}
      </div>
  </motion.div>
</button>
  );
}
