import { useForm } from "react-hook-form";
import type { Task } from "../../types/task";
import { useNavigate } from "react-router-dom";

type TaskFormValues = {
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Completed";
};

type CreateTaskProps = {
  addTask: (task: Omit<Task, "id">) => void;
};

const useCreateTask = ({ addTask }: CreateTaskProps) => {
    const navigate = useNavigate();

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

  const onSubmitForm = (data: TaskFormValues): void => {
    addTask(data);
    reset();
    navigate("/dashboard/tasks");
  };

  return {
    register,
    handleSubmit,
    onSubmitForm,
    errors,
  }
}

export default useCreateTask;