import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useTasksContext from "../../context/useTasksContext";
import useTaskContext from "../../context/useTasksContext";

const useEditTask = () => {
  const { dispatch } = useTaskContext();
  const { tasks } = useTasksContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const currentID = Number(id);

  type TaskFormValues = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Completed";
};

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
    dispatch({ type: "UpdateTask", task: {...data, id: currentID} });
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