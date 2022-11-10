import React, { useRef } from "react";
import { useEffect } from "react";
import Taskcard from "../components/Taskcard";
import { useTasks } from "../context/TaskProvider";

function TaskPage() {
  const { task, loadTasks } = useTasks();
  //const [task, setTask] = useState([]);
  useEffect(() => {
    loadTasks();
  }, []);

  //render
  function mainContent() {
    if (task.length === 0) return <h1>No tasks found</h1>;
    return task.map((task) => <Taskcard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grids-col-3 gap-2">
        {mainContent()}
        </div>
    </div>
  );
}

export default TaskPage;
