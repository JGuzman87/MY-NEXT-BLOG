"use client";
import "./Form.css";
import { useState, useEffect } from "react";
import {useRouter} from 'next/navigation';


const Form = () => {

  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;
    if (inputName === "userName") {
      setUserName(inputValue);
    } else if (inputName === "title") {
      setTitle(inputValue);
    } else if (inputName === "content") {
      setContent(inputValue);
    }

  };

  const handleClick = (e) => {
    e.preventDefault();

    if (userName === "") {
      return setError("Pleaase enter a Username");
    } else if (title === "") {
      return setError("Pleaase enter a Title");
    } else if (content === "") {
      return setError("Please add Content");
    } else {
      setError("");
    }

    setUserName("");
    setTitle("");
    setContent("");
    router.push('/blog')
    
  };

  return (
    <form className="form-container">
      <label
        htmlFor="username"
        className="block text-sm/6 font-medium"
      >
        Username:
      </label>
      <input
        value={userName}
        className="user-name"
        name="userName"
        type="text"
        onChange={handleInputChange}
        placeholder="Username"
      />
      <label
        htmlFor="title"
        className="block text-sm/6 font-large"
      >
        Title:
      </label>
      <input
        value={title}
        className="title"
        name="title"
        type="text"
        onChange={handleInputChange}
        placeholder="Title"
      />
      <label
        htmlFor="content"
        className="block text-sm/6 font-medium"
      >
        Content:
      </label>
      <textarea
        value={content}
        className="content"
        name="content"
        type="textarea"
        onChange={handleInputChange}
        placeholder="Content"
      ></textarea>
      <p className="error">{error}</p>
      <button className="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};

export default Form;
