import React from "react";
import Card from "./Card";

export default function company({ tasks, addTask }) {
  return (
    <>
      {tasks
        .filter((item) => item.timeline === "company")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
