
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import CreateTask from "./pages/CreateTask/CreateTask";
import { type Task } from "./types/task";
import { useState, useEffect } from "react";



const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finish project proposal",
    description: "Prepare the final proposal and send it to the team.",
    dueDate: "2026-10-15",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Review code changes",
    description: "Review pull requests and provide feedback.",
    dueDate: "2026-10-15",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Plan weekend trip",
    description: "Research destinations and organize transportation.",
    dueDate: "2026-10-17",
    priority: "Low",
    completed: false,
  },
  {
    id: 4,
    title: "Read a book",
    description: "Read one chapter of the current book.",
    dueDate: "2026-10-17",
    priority: "Low",
    completed: true,
  },
  {
    id: 5,
    title: "Update documentation",
    description: "Document the latest project features.",
    dueDate: "2026-10-18",
    priority: "Medium",
    completed: false,
  },
  {
    id: 6,
    title: "Go to the gym",
    description: "Complete the planned workout session.",
    dueDate: "2026-10-18",
    priority: "Low",
    completed: true,
  },
  {
    id: 7,
    title: "Prepare presentation",
    description: "Create slides for the upcoming team meeting.",
    dueDate: "2026-10-19",
    priority: "High",
    completed: false,
  },
  {
    id: 8,
    title: "Organize workspace",
    description: "Clean up project files and organize folders.",
    dueDate: "2026-10-20",
    priority: "Low",
    completed: false,
  },
];


const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() =>{
    const savedTasks: string | null = localStorage.getItem('Tasks');

    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}  />
          <Route path="dashboard" element={<Dashboard />}  />
          <Route path="tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
          <Route path="create-task" element={<CreateTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
