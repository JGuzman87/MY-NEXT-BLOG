"use client";
import {useState, useEffect} from 'react';
import './Post.css'

const Post = () => {

    const [postData, setPostData] = useState('');
    // const [post, setPost] = useState({name: '', title: '', content: ''})
    const formData = JSON.parse(localStorage.getItem('PostData'));

    useEffect(() => {
          if (formData) {
            setPostData(formData);
          }
          

    }, [])

    if (!formData) {
           return <p>No form Data available</p>
    }
  console.log(postData.userName)
return (
  <div className='blog-post'>
    <h1 id='title'>{postData.title}</h1>
    <p id='username'>{postData.userName}:</p>
    <p id='content'>{postData.content}</p>
    <></>
  </div>
);
}

export default Post;