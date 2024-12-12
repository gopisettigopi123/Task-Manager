import axios from "axios";
import "./styles.css";

const API = axios.create({ baseURL: "http://localhost:5000/api/tasks" });

export const fetchTasks = () => API.get("/");
export const createTask = (task) => API.post("/", task);
export const updateTask = (id, updatedTask) => API.put(`/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/${id}`);
