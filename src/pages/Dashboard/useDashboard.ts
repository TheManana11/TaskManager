import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useTasksContext from "../../context/useTasksContext";


const useDashboard = () => {
    const { tasks, dispatch } = useTasksContext();
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
        dispatch({ type: "ToggleTaskStatus", id:  id  });
      };
    
      const handleDeleteTask = (id: number): void => {
        dispatch({ type: "DeleteTask", id:  id  });
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