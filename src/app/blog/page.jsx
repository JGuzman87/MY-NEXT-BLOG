"use client";
import Post from '../../components/Post';

import {useRouter, usePathname } from 'next/navigation';

const blogStyle = {
  width: "80%",
  height: "15%",
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "3%",
  padding: "10px",
  backgroundColor: 'teal',
  boxShadow: "5px 5px 10px darkslategray",
};

export default function Blog() {

  const pathname = usePathname();
return (
 
    <div style={blogStyle}>
      <Post />
    </div>
    

);
}