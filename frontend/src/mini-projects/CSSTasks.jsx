import React, { useState } from "react";
import "./Tasks.css"; // ✅ External CSS file (create this)

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTaskHandler = () => {
    setTasks([...tasks, { task: input, isChecked: false }]);
  };

  const removeTaskHandler = (input) => {
    setTasks(tasks.filter((t, i) => i !== input));
  };

  const completedtaskhandler = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, isChecked: !t.isChecked } : t))
    );
  };

  return (
    <div className="tasks-container">
      <label className="tasks-label">Enter the task:</label>
      <div className="tasks-input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="tasks-input"
        />
        <button onClick={addTaskHandler} className="tasks-add-btn">
          Add Task
        </button>
      </div>
      <ul className="tasks-list">
        {tasks.map((obj, index) => (
          <li key={index} className="tasks-item">
            <input
              className="tasks-checkbox"
              type="checkbox"
              onChange={() => completedtaskhandler(index)}
            />
            <span
              className={`tasks-text ${obj.isChecked ? "tasks-completed" : ""}`}
            >
              Task : {obj.task}
            </span>
            <button
              onClick={() => removeTaskHandler(index)}
              className="tasks-delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
