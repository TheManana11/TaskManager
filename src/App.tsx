import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import CreateTask from "./pages/CreateTask/CreateTask";
import EditTask from "./pages/EditTask/EditTask";
import Signup from './pages/Signup/SignUp';
import type { Task } from "./types/task";
import useTasksContext from "./context/useTasksContext";

const App = () => {
  const { tasks, setTasks } = useTasksContext();
  
  const addTask = (task: Omit<Task, "id">): void => {
    const newId =
      Math.max(0, ...tasks.map((existingTask) => existingTask.id)) + 1;

    const newTask: Task = {
      ...task,
      id: newId,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const editTask = (task: Task): void => {
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
        <Route path="/" element={<Signup />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="tasks"
            element={<Tasks  />}
          />

          <Route
            path="create-task"
            element={<CreateTask addTask={addTask} />}
          />

          <Route
            path="edit-task/:id"
            element={<EditTask editTask={editTask} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;