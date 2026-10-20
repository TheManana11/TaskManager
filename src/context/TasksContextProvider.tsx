
import { useEffect, useReducer, type ReactNode } from "react";
import type { Task } from "../types/task";
import { TasksContext } from "./TasksContext";
import { taskReducer } from "../reducer/taskReducer";

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

type TaskProviderProps = {
  children: ReactNode;
};

const getInitialTasks = (): Task[] => {
    const savedTasks = localStorage.getItem("Tasks");

    return savedTasks ? (JSON.parse(savedTasks) as Task[]) : initialTasks;
  };

const TasksContextProvider = ({ children }: TaskProviderProps) => {
  
  const[tasks, dispatch] = useReducer(taskReducer, undefined, getInitialTasks);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
