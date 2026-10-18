
import { useNavigate } from "react-router-dom";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiPlus,
  FiArrowRight,
} from "react-icons/fi";

import TaskCard from "../../components/TaskCard/TaskCard";
import type { Task } from "../../types/task";
import "./styles.css";

type DashboardProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const Dashboard = ({ tasks, setTasks }: DashboardProps) => {
  const navigate = useNavigate();

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const todaysTasks = tasks.filter(
    (task) => task.dueDate === todayString
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const handleToggleTask = (id: number) => {
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

  const handleDeleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-heading">
          <h1>Welcome back, Ahmad! 👋</h1>
          <p>Here's what's happening with your tasks today.</p>
        </div>

        <button
          className="dashboard-new-task-button"
          onClick={() => navigate("/create-task")}
        >
          <FiPlus />
          <span>New Task</span>
        </button>
      </header>

      <section className="dashboard-stats">
        <article className="dashboard-stat-card total-stat">
          <div className="dashboard-stat-icon">
            <FiCalendar />
          </div>

          <div className="dashboard-stat-info">
            <p>Total Tasks</p>
            <h2>{tasks.length}</h2>
          </div>
        </article>

        <article className="dashboard-stat-card completed-stat">
          <div className="dashboard-stat-icon">
            <FiCheckCircle />
          </div>

          <div className="dashboard-stat-info">
            <p>Completed</p>
            <h2>{completedTasks}</h2>
          </div>
        </article>

        <article className="dashboard-stat-card pending-stat">
          <div className="dashboard-stat-icon">
            <FiClock />
          </div>

          <div className="dashboard-stat-info">
            <p>Pending</p>
            <h2>{pendingTasks}</h2>
          </div>
        </article>
      </section>

      <section className="dashboard-today-section">
        <div className="dashboard-section-header">
          <h2>Today's Tasks</h2>

          <button
            className="dashboard-view-all-button"
            onClick={() => navigate("/tasks")}
          >
            View all
            <FiArrowRight />
          </button>
        </div>

        <div className="dashboard-today-list">
          {todaysTasks.length > 0 ? (
            todaysTasks.map((task) => (
              <div className="dashboard-task-item" key={task.id}>
                <TaskCard
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              </div>
            ))
          ) : (
            <div className="dashboard-empty-state">
              <div className="dashboard-empty-icon">
                <FiCalendar />
              </div>

              <h3>No tasks due today</h3>
              <p>
                You're all caught up! Create a task or check your upcoming
                tasks.
              </p>

              <button
                className="dashboard-empty-button"
                onClick={() => navigate("/create-task")}
              >
                <FiPlus />
                Create a task
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
