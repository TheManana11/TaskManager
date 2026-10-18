
import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import type { Task } from "../../types/task";
import "./styles.css";

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskCard = ({ task, onToggle, onDelete }: TaskCardProps) => {
  return (
    <article
      className={`task-card ${
        task.status === 'Completed' ? "task-card-completed" : ""
      }`}
    >
      <div className="task-card-header">
        <label className="task-checkbox">
          <input
            type="checkbox"
            checked={task.status === 'Completed'}
            onChange={() => onToggle(task.id)}
            aria-label={`Mark ${task.title} as ${
              task.status === 'Completed' ? "pending" : "completed"
            }`}
          />
        </label>

        <h3 className="task-title">{task.title}</h3>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-details">
        <p>
          <span className="detail-label">Due date:</span>{" "}
          {task.dueDate}
        </p>

        <p>
          <span className="detail-label">Priority:</span>{" "}
          <span
            className={`task-priority priority-${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </span>
        </p>

        <p>
          <span className="detail-label">Status:</span>{" "}
          <span className={task.status === 'Completed' ? "status-completed" : "status-pending"}>
            {task.status === 'Completed' ? "Completed" : "Pending"}
          </span>
        </p>
      </div>

      <div className="task-card-actions">
        <Link
          to={`/edit-task/${task.id}`}
          className="task-action-button edit-button"
        >
          <FiEdit2 aria-hidden="true" />
          <span>Edit</span>
        </Link>

        <button
          type="button"
          className="task-action-button delete-button"
          onClick={() => onDelete(task.id)}
        >
          <FiTrash2 aria-hidden="true" />
          <span>Delete</span>
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
