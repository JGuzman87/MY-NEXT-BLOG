"use client";
import Post from '../../components/Post';

import {useRouter, usePathname } from 'next/navigation';

export default function Blog() {

  const pathname = usePathname();
return (
  <div>

  <Post
     
    />
  </div>
);
}