import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTaskForm({ setAddItem, addItem, tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      id: uuidv4(),
      title: title,
      link: link,
      timeline: option,
    };
    setTasks([...tasks, newTask]);
    setAddItem(!addItem);
  };
  return (
    <div className="addForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="link"
          onChange={(e) => setLink(e.target.value)}
        />
        <select
          name="timeline"
          id="timeline"
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option value="about">about</option>
          <option value="Wwdo">What where do</option>
          <option value="company">Your company</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
