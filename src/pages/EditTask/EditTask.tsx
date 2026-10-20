import { Link } from "react-router-dom";
import type { Task } from "../../types/task";
import { FiArrowDownLeft, FiCalendar, FiCheckCircle, FiFileText, FiFlag } from "react-icons/fi";
import useEditTask from "./useEditTask";

type EditTaskProps = {
  editTask: (task: Task) => void;
};


const EditTask = ({ editTask }: EditTaskProps) => {
  const { register, handleSubmit, errors, onSubmitForm } = useEditTask({ editTask });

  return (
    <main className="create-task-page">
      <div className="create-task-breadcrumb">
        <Link to="/dashboard/tasks" className="back-link">
          <FiArrowDownLeft aria-hidden="true" />
          <span>Back to tasks</span>
        </Link>
      </div>

      <header className="create-task-header">
        <div className="create-task-title-group">
          <div className="create-task-icon">
            <FiCheckCircle aria-hidden="true" />
          </div>

          <div>
            <h1>Edit Existing Task</h1>
          </div>
        </div>
      </header>

      <div className="create-task-content">
        <section className="create-task-card">
          <div className="form-section-heading">
            <div className="section-heading-icon">
              <FiFileText aria-hidden="true" />
            </div>

            <div>
              <h2>Task Information</h2>
              <p>Update the details of your task below.</p>
            </div>
          </div>

          <div className="form-divider" />

          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="create-task-form"
          >
            <div className="form-field">
              <label htmlFor="title">
                Task Title <span className="required-mark">*</span>
              </label>

              <input
                id="title"
                type="text"
                placeholder="e.g. Complete project proposal"
                {...register("title", {
                  required: "The title is required",
                  minLength: {
                    value: 3,
                    message: "The minimum length for the title is 3",
                  },
                  maxLength: {
                    value: 100,
                    message: "The maximum length for the title is 100",
                  },
                })}
              />

              {errors.title && (
                <span className="field-error">
                  {errors.title.message}
                </span>
              )}

              <span className="field-hint">
                Give your task a clear and descriptive title.
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="description">Description</label>

              <textarea
                id="description"
                rows={5}
                placeholder="Describe the task, its objectives, or any additional details..."
                {...register("description", {
                  required: "The description is required",
                  minLength: {
                    value: 10,
                    message: "The minimum length for the description is 10",
                  },
                  maxLength: {
                    value: 500,
                    message: "The maximum length for the description is 500",
                  },
                })}
              />

              {errors.description && (
                <span className="field-error">
                  {errors.description.message}
                </span>
              )}

              <span className="field-hint">
                Add any details that will help you complete this task.
              </span>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="dueDate">
                  <FiCalendar aria-hidden="true" />
                  Due Date <span className="required-mark">*</span>
                </label>

                <input
                  id="dueDate"
                  type="date"
                  {...register("dueDate", {
                    required: "The date is required",
                  })}
                />

                {errors.dueDate && (
                  <span className="field-error">
                    {errors.dueDate.message}
                  </span>
                )}

                <span className="field-hint">
                  When should this task be completed?
                </span>
              </div>

              <div className="form-field">
                <label htmlFor="priority">
                  <FiFlag aria-hidden="true" />
                  Priority <span className="required-mark">*</span>
                </label>

                <select
                  id="priority"
                  {...register("priority", {
                    required: "The priority is required",
                  })}
                >
                  <option value="Low">Low Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="High">High Priority</option>
                </select>

                {errors.priority && (
                  <span className="field-error">
                    {errors.priority.message}
                  </span>
                )}

                <span className="field-hint">
                  Set the importance of this task.
                </span>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="status">
                Status <span className="required-mark">*</span>
              </label>

              <select
                id="status"
                {...register("status", {
                  required: "The status is required",
                })}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>

              {errors.status && (
                <span className="field-error">
                  {errors.status.message}
                </span>
              )}

              <span className="field-hint">
                Choose the current status of this task.
              </span>
            </div>

            <div className="form-divider form-actions-divider" />

            <div className="create-task-actions">
              <Link
                to="/dashboard/tasks"
                className="cancel-task-button"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="save-task-button"
              >
                <FiCheckCircle aria-hidden="true" />
                Update Task
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default EditTask;
