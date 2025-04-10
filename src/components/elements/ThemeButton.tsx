'use client';

import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme == 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="text-foreground-default flex cursor-pointer items-center justify-center p-1"
      aria-label="Toggle theme"
      whileTap={{ y: 1 }}
    >
      <AnimatePresence>
        {currentTheme === 'dark' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                delay: 0.2,
                visualDuration: 0.3,
                bounce: 0.4,
              },
            }}
            exit={{ opacity: 0, scale: 0 }}
            key="sun"
          >
            <Sun size={32} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                delay: 0.2,
                visualDuration: 0.3,
                bounce: 0.4,
              },
            }}
            exit={{ opacity: 0, scale: 0 }}
            key="moon"
          >
            <Moon size={32} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
