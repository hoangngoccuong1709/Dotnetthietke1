import React from "react";
import Card from "./Card";

export default function Wwdo({ tasks, addTask }) {
  return (
    <>
      {tasks
        .filter((item) => item.timeline === "Wwdo")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
