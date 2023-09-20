import React from "react";
import "../index.css";

const DoList = ({ tasks }) => {
  const getColorByImportance = (importance) => {
    switch (importance) {
      case "important":
        return "#ff006e";
      case "moins important":
        return "#003566";
      case "pas important":
        return "#5f0f40";
    }
  };

  return (
    <div className="do-list">
      <h2 style={{ color: "#03045e" }}>Liste des tâches</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ backgroundColor: getColorByImportance(task.importance) }}
          >
            <h2 className="taskName">{task.name}</h2>
            <p style={{ fontSize: "15px" }}>{task.task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoList;
