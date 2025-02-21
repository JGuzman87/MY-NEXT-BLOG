"use client"
import './Nav.css'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
const Nav = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState('white');

  const handleToggle = () => {
    router.push('/')

    console.log('handlerworks')
  }
  
  return (
<nav className="nav-bar">
    <h1>My Next Blog</h1>
    <button className="toggle" onClick={handleToggle} >🌓</button>
   
</nav>

  );
};

export default Nav;
