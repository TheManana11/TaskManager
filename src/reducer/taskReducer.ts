
import type { Task } from "../types/task";

export type TaskAction =
   {
      type: "AddTask";
      task: Omit<Task, "id">;
    }
  | {
      type: "DeleteTask";
      id: number;
    }
  | {
      type: "ToggleTaskStatus";
      id: number;
    }
  | {
      type: "UpdateTask",
      task: Task;
    };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "AddTask": {
      const newId =
        Math.max(0, ...state.map((task) => task.id)) + 1;

      const newTask: Task = {
        ...action.task,
        id: newId,
      };

      return [...state, newTask];
    }

    case "DeleteTask":
      return state.filter((task) => task.id !== action.id);

    case "ToggleTaskStatus":
      return state.map((task) =>
        task.id === action.id
          ? {
              ...task,
              status:
                task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      );

    case "UpdateTask":
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );

    default:
      return state;
  }
};
