import axios from 'axios';

export const getTasksReq = async () =>
  await axios.get('http://localhost:4000/tasks');

export const createTaskReq = async (task) =>
  await axios.post('http://localhost:4000/tasks', task);

export const deleteTaskReq = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskReq = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskReq = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

export const toggleTaskDoneReq = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });
