import { useState } from "react";
import type { TaskFilter } from "../../types/task";
import useTasksContext from "../../context/useTasksContext";


const useTasks = () => {
  const { tasks, dispatch } = useTasksContext();
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
    tasks,
  };
}

export default useTasks;