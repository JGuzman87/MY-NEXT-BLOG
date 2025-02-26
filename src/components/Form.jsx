"use client";
import "./Form.css";
import { useState } from "react";
import {useRouter} from 'next/navigation';


const Form = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({userName: '', title: '', content: ''})
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;
   setFormData({...formData, [inputName]: inputValue})

  };

  const handleClick = (e) => {
    e.preventDefault();

    if (formData.userName === "") {
      return setError("Pleaase enter a Username");
    } else if (formData.title === "") {
      return setError("Pleaase enter a Title");
    } else if (formData.content === "") {
      return setError("Please add Content");
    } else {
      setError("");
    }
    localStorage.setItem('PostData', JSON.stringify(formData));

    setFormData({userName: '', title: '', content: ''})
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
        value={formData.userName}
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
        value={formData.title}
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
        value={formData.content}
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
