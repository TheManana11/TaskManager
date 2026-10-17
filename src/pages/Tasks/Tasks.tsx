
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import TaskCard from "../../components/TaskCard/TaskCard";
import type { Task, TaskFilter } from "../../types/task";
import "./styles.css";

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

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<TaskFilter>("All");

  const handleToggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  const pendingCount = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h1>All Tasks</h1>

        <NavLink to="/create-task" className="new-task-button">
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
