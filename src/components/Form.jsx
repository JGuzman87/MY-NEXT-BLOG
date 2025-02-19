"use client"; 
import "./Form.css"
import { useState } from "react";
import "./Nav.css";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value
    if(inputName === "userName"){
      setUserName(inputValue);
    } else if(inputName === "title") {
      setTitle(inputValue);
    } else if (inputName === "content") {
      setContent(inputValue);
    }
      
    
    
    console.log(inputName);
  };
  
  
  const handleClick = (e) => {

    e.preventDefault();

    setUserName('');
    setTitle("");
    setContent("");
  };

  return (
    <form className="form-container">
      <label
        htmlFor="username"
        className="block text-sm/6 font-medium text-gray-900"
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
        className="block text-sm/6 font-large text-gray-900"
      >
        Title:
      </label>
      <input value={title} className="title" name="title" type="text" onChange={handleInputChange} placeholder="Title" />
      <label
        htmlFor="content"
        className="block text-sm/6 font-medium text-gray-900"
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
      <button className="submit" onClick={handleClick} >Submit</button>
    </form>
  );
};

export default Form;
