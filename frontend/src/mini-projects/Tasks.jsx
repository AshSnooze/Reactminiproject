import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTaskHandler = () => {
    setTasks([...tasks, { task: input, isChecked: false }]);
    setInput(""); 
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
    <div>
      <label>Enter the task:</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTaskHandler}>Add Task</button>
      <ul>
        {tasks.map((obj, index) => (
          <li key={index} className="task">
            <input
              className="task"
              type="checkbox"
              checked={t.completed}
              onChange={() => completedtaskhandler(index)}
            ></input>
            ; return{" "}
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.task}
            </span>
            ;<button onClick={() => removeTaskHandler(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
