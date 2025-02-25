"use client";

import './Post.css'

const Post = (props) => {

    // const [post, setPost] = useState({name: '', title: '', content: ''})

return (
        <div className="blog-post">
            <h1>{props.title}</h1>
            <p>{props.name}</p>
            <p>{props.content}</p>
        </div>
)
}

export default Post;