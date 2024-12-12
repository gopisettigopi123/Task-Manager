import React, { useState } from "react";
import "./task.css";


const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title });
    setTitle("");
  };

  return (
  <form onSubmit={handleSubmit}>
     <input 
        type="text"
        placeholder = "Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button   className="buttonTask" type="submit"> <h2 className="addtask">Add Task</h2> </button>
    </form>
  ); 
};

export default TaskForm;
