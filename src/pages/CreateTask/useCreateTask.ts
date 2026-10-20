import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useTasksContext from "../../context/useTasksContext";

type TaskFormValues = {
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Completed";
};


const useCreateTask = () => {
  const navigate = useNavigate();
  const { dispatch } = useTasksContext();

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
    dispatch({ type: "AddTask", task: data });
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