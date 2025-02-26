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
            <p>No form Data available</p>
    }
  console.log(postData.userName)
return (
  <div className="blog-post">
    <p>{postData.title}</p>
    <p>{postData.userName}</p>
    <p>{postData.content}</p>
    <></>
  </div>
);
}

export default Post;