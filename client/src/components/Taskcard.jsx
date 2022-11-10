import React from "react";
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
function Taskcard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };
  return (
    <div className="bg-zinc-600 text-white rounded-md p-4 ">
      <h2 className="text-sm font-bold">{task.title}</h2>
      <header className="flex justicy-between ">
        <span>{task.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1 ">
        <button
          className="bg-stale-300 px-2 py-1 text-black"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-stale-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-stale-300 px-2 py-1 text-black"
          onClick={() => handleDone(task.done)}
        >
          Toggle task
        </button>
      </div>
    </div>
  );
}

export default Taskcard;
