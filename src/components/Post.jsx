"use client";
import {useState, useEffect} from 'react';
import './Post.css'

const Post = () => {

    const [postData, setPostData] = useState([]);
  

    useEffect(() => {
          const storedPosts = JSON.parse(localStorage.getItem("PostData"));
      setPostData(storedPosts);
           if (!storedPosts) {
             return <p>No form Data available</p>;
           }

    }, [])

  

  const handleClick = () => {
    localStorage.removeItem('PostData')
   setPostData('')
  }

  
return (
  <div className='blog-post'>
    <h1 id='title'>{postData.title}</h1>
    <p id='username'>{postData.userName}:</p>
    <p id='content'>{postData.content}</p>
    <button className='delete'onClick={handleClick}>Delete</button>
  </div>
);
}

export default Post;