import { useState, type Dispatch, type SetStateAction } from "react";
import type { Task, TaskFilter } from "../../types/task";

type TasksProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const useTasks = ({ tasks, setTasks }: TasksProps) => {
  const [filter, setFilter] = useState<TaskFilter>("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") {
      return task.status === "Pending";
    }

    if (filter === "Completed") {
      return task.status === "Completed";
    }

    return true;
  });

  return {
    filter,
    setFilter,
    filteredTasks,
  };
}

export default useTasks;