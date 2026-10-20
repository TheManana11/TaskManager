import { useMemo, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import type { Task } from "../../types/task";
import useTasksContext from "../../context/useTasksContext";


const useDashboard = () => {
    const { tasks, setTasks } = useTasksContext();
    const navigate = useNavigate();
    
      const todayString = useMemo(() => {
        const today = new Date();
    
        return [
          today.getFullYear(),
          String(today.getMonth() + 1).padStart(2, "0"),
          String(today.getDate()).padStart(2, "0"),
        ].join("-");
      }, []);
    
      const todaysTasks = tasks.filter(
        (task) => task.dueDate === todayString
      );
    
      const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
      ).length;
    
      const pendingTasks = tasks.filter(
        (task) => task.status === "Pending"
      ).length;
    
      const handleToggleTask = (id: number): void => {
        setTasks((currentTasks: Task[]) =>
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
        setTasks((currentTasks: Task[]) =>
          currentTasks.filter((task) => task.id !== id)
        );
      };

      return{
        navigate,
        todayString,
        todaysTasks, 
        completedTasks,
        pendingTasks,
        handleToggleTask,
        handleDeleteTask,
        tasks   
      }
}

export default useDashboard;