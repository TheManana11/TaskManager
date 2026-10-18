
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import CreateTask from "./pages/CreateTask/CreateTask";
import EditTask from "./pages/EditTask/EditTask";

import type { Task } from "./types/task";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finish project proposal",
    description: "Prepare the final proposal and send it to the team.",
    dueDate: "2026-10-15",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Review code changes",
    description: "Review pull requests and provide feedback.",
    dueDate: "2026-10-15",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 3,
    title: "Plan weekend trip",
    description: "Research destinations and organize transportation.",
    dueDate: "2026-10-17",
    priority: "Low",
    status: "Pending",
  },
  {
    id: 4,
    title: "Read a book",
    description: "Read one chapter of the current book.",
    dueDate: "2026-10-17",
    priority: "Low",
    status: "Completed",
  },
  {
    id: 5,
    title: "Update documentation",
    description: "Document the latest project features.",
    dueDate: "2026-10-18",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 6,
    title: "Go to the gym",
    description: "Complete the planned workout session.",
    dueDate: "2026-10-18",
    priority: "Low",
    status: "Completed",
  },
  {
    id: 7,
    title: "Prepare presentation",
    description: "Create slides for the upcoming team meeting.",
    dueDate: "2026-10-19",
    priority: "High",
    status: "Pending",
  },
  {
    id: 8,
    title: "Organize workspace",
    description: "Clean up project files and organize folders.",
    dueDate: "2026-10-20",
    priority: "Low",
    status: "Pending",
  },
];

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks: string | null = localStorage.getItem("Tasks");

    return savedTasks ? JSON.parse(savedTasks) as Task[] : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Omit<Task, "id">) => {
    let id: number;

    do {
      id = Date.now();
    } while (tasks.some((existingTask) => existingTask.id === id));

    const newTask: Task = {
      ...task,
      id,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const editTask = (task: Task) => {
    setTasks((currentTasks) =>
      currentTasks.map((currentTask) =>
        currentTask.id === task.id
          ? { ...currentTask, ...task }
          : currentTask
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard tasks={tasks} setTasks={setTasks} />} />

          <Route path="dashboard" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />

          <Route
            path="tasks"
            element={
              <Tasks tasks={tasks} setTasks={setTasks} />
            }
          />

          <Route
            path="create-task"
            element={<CreateTask addTask={addTask} />}
          />

          <Route
            path="edit-task/:id"
            element={
              <EditTask tasks={tasks} editTask={editTask} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
