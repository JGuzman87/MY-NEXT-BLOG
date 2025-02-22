"use client"
import './Nav.css'
import { useTheme } from 'next-themes';
import {useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
const Nav = () => {
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');

    console.log('handlerworks')
  }
  
  return (
    <nav className="nav-bar">
      <h1>My Next Blog</h1>
      <button className="toggle" onClick={handleToggle}>
        {theme === "dark" ? "🌞" : "🌙 "}
      </button>
    </nav>
  );
};

export default Nav;
