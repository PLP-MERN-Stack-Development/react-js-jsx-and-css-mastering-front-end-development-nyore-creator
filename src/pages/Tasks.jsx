import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filtered = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-8">
      <Card title="Task Manager">
        <div className="flex gap-2 mb-4">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task..."
            className="flex-grow border p-2 rounded"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex gap-2 mb-4">
          {["All", "Active", "Completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "secondary"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        {filtered.map((task, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span
              onClick={() => toggleTask(index)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}
