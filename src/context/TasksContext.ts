import { createContext } from "react";
import type { Task } from "../types/task";


type contextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TasksContext = createContext<contextType | undefined>(undefined);
