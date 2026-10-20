import { createContext } from "react";
import type { Task } from "../types/task";
import { type TaskAction } from "../reducer/taskReducer";

type contextType = {
  tasks: Task[],
  dispatch: React.Dispatch<TaskAction>
};

export const TasksContext = createContext<contextType | undefined>(undefined);
