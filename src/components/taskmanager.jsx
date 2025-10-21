import { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleComplete = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filtered =
    filter === "active" ? tasks.filter(t => !t.completed)
    : filter === "completed" ? tasks.filter(t => t.completed)
    : tasks;

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          className="border rounded p-2 flex-grow"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="space-x-2 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      <ul>
        {filtered.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <div className="space-x-2">
              <Button variant="secondary" onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Done"}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
