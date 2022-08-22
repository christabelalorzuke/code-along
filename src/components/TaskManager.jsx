import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

import { v4 as uuid } from "uuid";

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) return [];
    return JSON.parse(tasks);
  });
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const handleDelete = (idx) => {
    const newData = tasks.filter((task) => task !== idx);
    setTasks(newData);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="relative h-screen w-full bg-slate-800/90 ">
      <div className="h-full bg-blue-600 justify-center items-center flex px-5 py-10">
        <div className=" max-w-xl px-5 py-10 bg-white rounded-xl max-h-[500px]">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-2 border-yellow-500 p-2 rounded-md outline-non w-10/12"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />

            <button
              type="submit"
              className="bg-purple-600 px-5 py-2 text-white text-lg rounded-md"
              disabled={input === ""}
            >
              Add
            </button>
          </form>
          <div className="space-y-2 overflow-y-auto h-56">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
