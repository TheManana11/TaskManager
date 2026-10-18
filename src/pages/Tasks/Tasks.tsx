
import { useState, type Dispatch, type SetStateAction } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

import TaskCard from "../../components/TaskCard/TaskCard";
import type { Task, TaskFilter } from "../../types/task";
import "./styles.css";

type TasksProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const Tasks = ({ tasks, setTasks }: TasksProps) => {
  const [filter, setFilter] = useState<TaskFilter>("All");

  const handleToggleTask = (id: number): void => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id: number): void => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") {
      return task.status === "Pending";
    }

    if (filter === "Completed") {
      return task.status === "Completed";
    }

    return true;
  });

  const pendingCount = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h1>All Tasks</h1>

        <NavLink
          to="/dashboard/create-task"
          className="new-task-button"
        >
          <IoIosAddCircleOutline aria-hidden="true" />
          <span>New Task</span>
        </NavLink>
      </header>

      <section className="tasks" aria-label="Task list">
        <div className="filter" aria-label="Filter tasks">
          <button
            type="button"
            className={filter === "All" ? "active" : ""}
            aria-pressed={filter === "All"}
            onClick={() => setFilter("All")}
          >
            All ({tasks.length})
          </button>

          <button
            type="button"
            className={filter === "Pending" ? "active" : ""}
            aria-pressed={filter === "Pending"}
            onClick={() => setFilter("Pending")}
          >
            Pending ({pendingCount})
          </button>

          <button
            type="button"
            className={filter === "Completed" ? "active" : ""}
            aria-pressed={filter === "Completed"}
            onClick={() => setFilter("Completed")}
          >
            Completed ({completedCount})
          </button>
        </div>

        <div className="show-tasks">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <p className="empty-tasks">
              No {filter.toLowerCase()} tasks found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tasks;
