import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { v4 as uuid } from "uuid";
// import  from '';
// import  from '';
// import background from "../assets/ColorArt.jpg";
// import {list} from "postcss";

const getTasksFromlocalStorage = () => {
  // get the task from the localStorage
  const savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) return [];
  return JSON.parse(savedTasks);
};

function TaskManager() {
  const [tasks, setTasks] = useState(getTasksFromlocalStorage);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setTasks([newTask, ...tasks], () => {});
    setInput("");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // };
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="relative h-screen w-full bg-slate-800/90 ">
      {/* //    <img src={background}alt="" */}

      <div className="h-screen bg-gradient-to-br from-fuchsia-900 justify-center items-center flex px-5 py-10">
        <div className=" max-w-xl px-16 py-20 bg-white rounded-xl max-h-[500px]">
          <div className="bg-yellow-800 m-5 mt-0 text-center text-white rounded-lg p-2 outline-none">DAILY REMINDERS</div>
          <form
            className="w-full space-x-5 flex justify-between mb-10"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="border-2 border-yellow-800 px-16 py-2 rounded-md outline-none w-10/12"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />

            <button
              type="submit"
              className="bg-yellow-800 px-5 py-2 text-white text-lg rounded-md"
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
