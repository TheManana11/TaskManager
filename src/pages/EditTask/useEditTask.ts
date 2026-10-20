import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "../../types/task";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useTasksContext from "../../context/useTasksContext";

type EditTaskProps = {
  editTask: (task: Task) => void;
};

type TaskFormValues = {
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Completed";
};

const useEditTask = ({ editTask }: EditTaskProps) => {
  const { tasks } = useTasksContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const currentID = Number(id);

  const currentTask = tasks.find((task) => task.id === currentID);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
      status: "Pending",
    },
  });

  useEffect(() => {
    if (currentTask) {
      reset({
        title: currentTask.title,
        description: currentTask.description,
        dueDate: currentTask.dueDate,
        priority: currentTask.priority,
        status: currentTask.status,
      });
    }
  }, [currentTask, reset]);

  if (!id || !Number.isInteger(currentID) || !currentTask) {
    navigate("/dashboard/tasks");
  }

  const onSubmitForm = (data: TaskFormValues): void => {
    const updatedTask: Task = {
      id: currentID,
      ...data,
    };

    editTask(updatedTask);
    navigate("/dashboard/tasks");
  };

  return{ 
    register,
    handleSubmit,
    errors,
    onSubmitForm,
    currentTask,
  }
}

export default useEditTask;