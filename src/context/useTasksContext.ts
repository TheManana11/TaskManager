import { useContext } from "react";
import { TasksContext } from "./tasksContext";

const useTasksContext = () => {
    const context = useContext(TasksContext);
    if(!context){
        throw new Error("useDashboard must be used within a TasksContextProvider");
    }
    const { tasks, setTasks } = context;

    return { tasks, setTasks };
}

export default useTasksContext;