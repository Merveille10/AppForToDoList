import Form from "./components/Form";
import DoList from "./components/DoList";
import { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="container">
        <section className="form-section">
          <Form onSubmit={addTask} />
        </section>

        <section className="do-list-section">
          <DoList tasks={tasks} />
        </section>
      </div>
    </>
  );
}

export default App;
