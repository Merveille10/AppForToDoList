import React from "react";
import { useState } from "react";
import "../index.css";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [importance, setImportance] = useState("");

  const getFormValid = () => {
    return name && task && importance;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: name,
      task: task,
      importance: importance,
    };

    onSubmit(newTask);

    //Nous réinitialisons ensuite les champs du formulaire
    setName("");
    setTask("");
    setImportance("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Entrez le nom de l'individu à qui est assignée cette tâche:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Décrivez la tâche à exécuter:
          <input
            type="textarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <label>
          Veuillez spécifier l'importance de la tâche:
          <select
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="Importance de la tâche">
              Importance de la tâche
            </option>
            <option value="important">Important</option>
            <option value="moins important">Moins important</option>
            <option value="pas important">Pas important</option>
          </select>
        </label>
        <button type="submit" disabled={!getFormValid()} className="submit-btn">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default Form;
