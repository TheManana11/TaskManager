import { useContext } from "react";
import { TasksContext } from "./TasksContext";

const useTasksContext = () => {
    const context = useContext(TasksContext);
    if(!context){
        throw new Error("useDashboard must be used within a TasksContextProvider");
    }
    const { tasks, dispatch } = context;

    return { tasks, dispatch };
}

export default useTasksContext;