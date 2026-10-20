
import { type Dispatch, type SetStateAction } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

import TaskCard from "../../components/TaskCard/TaskCard";
import type { Task } from "../../types/task";
import "./styles.css";

import useDashboard from '../Dashboard/useDashboard'
import useTasks from "./useTasks";

type TasksProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const Tasks = ({ tasks, setTasks }: TasksProps) => {

  const { handleToggleTask, handleDeleteTask, pendingTasks: pendingCount, completedTasks: completedCount } = useDashboard({tasks, setTasks});
  const { filter, setFilter, filteredTasks } = useTasks({ tasks, setTasks });

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
