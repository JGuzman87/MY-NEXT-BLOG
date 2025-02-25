"use client";
import './Footer.css'
import {useRouter, usePathname } from 'next/navigation';

const Footer = () => {

  
  const router = useRouter();
  const pathname = usePathname();
 

  const handleClick = () => {
  router.push('/')
  }

  return (
    <footer className="footer">
      {pathname !== '/blog' ? null : <button className="back-btn" onClick={handleClick}> ⬅️</button>}
      <p>With ❤️ by Jorge</p>
    </footer>
  );
}

export default Footer;