import React from "react";
import Card from "./Card";

export default function About({ tasks, addTask }) {
  return (
    <>
      {tasks
        .filter((item) => item.timeline === "about")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
