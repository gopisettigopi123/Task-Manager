import React from "react";

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task._id}>
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",fontSize:30,
          }}
        >
          {task.title}
        </span>
        <button  className="undodelete" onClick={() => onToggleComplete(task)}>
         <h3 className="undocomplete">{task.completed ? "Undo" : "Complete"}</h3> 
        </button>
     <button onClick={() => onDeleteTask(task._id)}> <h3 className="delete">Delete</h3></button>
     
      </li>
    ))}
  </ul>
);

export default TaskList;
