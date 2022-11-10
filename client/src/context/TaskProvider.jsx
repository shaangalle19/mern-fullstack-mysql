import { useContext, useState } from "react";
import { createContext } from "react";
import {
  getTasksReq,
  deleteTaskReq,
  createTaskReq,
  getTaskReq,
  updateTaskReq,
  toggleTaskDoneReq,
} from "../api/tasks.api";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  async function loadTasks() {
    const response = await getTasksReq();
    setTasks(response.data);
  }

  const [task, setTasks] = useState([]);

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskReq(id);
      setTasks(task.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskReq(task);
      //const response = await createTaskReq(task);
      //setTasks([... task, response.data])
    } catch (error) {
      console.error(error);
      actions.resetForm();
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskReq(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskReq(id, newFields);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = task.find((task) => task.id === id);
      await toggleTaskDoneReq(id, taskFound.done === 0 ? true : false);
      task.map((task) =>
        task.id === id ? (task.done = task.done === 0 ? 1 : 0) : task.done
      );
      setTasks([...task]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
