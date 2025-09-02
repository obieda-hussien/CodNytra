'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/Button';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-11 h-11" />; // Placeholder to prevent layout shift
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full w-11 h-11 p-0"
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="h-4 w-4 text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-4 w-4 text-blue-600" />
      )}
    </Button>
  );
}