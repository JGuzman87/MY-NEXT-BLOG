"use client"
import './Nav.css'
import { useTheme } from 'next-themes';
import {useState, useEffect } from 'react';

const Nav = () => {
  
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');

    
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
