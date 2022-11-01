import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Wwdo from "./Wwdo";
import Company from "./Company";
import AddTaskForm from "./Addform";
import "./setting.css";

//them sua xoa footer and header
export default function Setting() {
  //TODO: chua toi uu
  const [tasks, setTasks] = useState([]);
  const [addItem, setAddItem] = useState(false);
  const handleSubmit = () => {
    setAddItem(!addItem);
  };
  const addTask = (task) => {
    setTasks(task);
  };
  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <div className="mainGrid">
        <div className="column">
          <About tasks={tasks} addTask={addTask} />
        </div>
        <div className="column">
          <Wwdo tasks={tasks} addTask={addTask} />
        </div>
        <div className="column">
          <Company tasks={tasks} addTask={addTask} />
        </div>
        {addItem && (
          <AddTaskForm
            addItem={addItem}
            setAddItem={setAddItem}
            tasks={tasks}
            setTasks={addTask}
          />
        )}
      </div>
    </div>
  );
}
