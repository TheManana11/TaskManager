import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import TaskCard from '../../components/TaskCard/TaskCard';

const Tasks = () => {

  type TaskType = 'All' | 'Pending' | 'Completed';
  const [filter, setFilter] = useState<TaskType>('All');
  
  type TaskPriority = 'Low' | 'Medium' | 'High';
  interface Tasks {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    priority: TaskPriority;
    completed: boolean;
  }
  
  const InitialTasks: Tasks[] = [
    {
      id: 1,
      title: "Finish project proposal",
      description: "Prepare the final proposal and send it to the team.",
    dueDate: "2026-10-15",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Review code changes",
    description: "Review pull requests and provide feedback.",
    dueDate: "2026-10-15",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Plan weekend trip",
    description: "Research destinations and organize transportation.",
    dueDate: "2026-10-17",
    priority: "Low",
    completed: false,
  },
  {
    id: 4,
    title: "Read a book",
    description: "Read one chapter of the current book.",
    dueDate: "2026-10-17",
    priority: "Low",
    completed: true,
  },
  {
    id: 5,
    title: "Update documentation",
    description: "Document the latest project features.",
    dueDate: "2026-10-18",
    priority: "Medium",
    completed: false,
  },
  {
    id: 6,
    title: "Go to the gym",
    description: "Complete the planned workout session.",
    dueDate: "2026-10-18",
    priority: "Low",
    completed: true,
  },
  {
    id: 7,
    title: "Prepare presentation",
    description: "Create slides for the upcoming team meeting.",
    dueDate: "2026-10-19",
    priority: "High",
    completed: false,
  },
  {
    id: 8,
    title: "Organize workspace",
    description: "Clean up project files and organize folders.",
    dueDate: "2026-10-20",
    priority: "Low",
    completed: false,
  },
]
  
const [filteredTasks, setFilteredTasks] = useState<Tasks[]>(InitialTasks);

  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h3>All Tasks</h3>
        <button>
          <IoIosAddCircleOutline /> 
          <span>
            <NavLink to='/create-task'>
              New Task
            </NavLink>
          </span>
        </button>
      </header>

      <div className="tasks">
        <div className="filter">
          <span className={filter === "All" ? 'active' : ''} onClick={() => setFilter('All')}>All ({InitialTasks.length})</span>
          <span className={filter === "Pending" ? 'active' : ''} onClick={() => setFilter('Pending')}>Pending ({ InitialTasks.filter((task) => !task.completed).length })</span>
          <span className={filter === "Completed" ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed ({ InitialTasks.filter((task) => task.completed).length }) </span>
        </div>

        <div className="show-tasks">
          {
            
          }
        </div>
      </div>
    </div>
  )
}

export default Tasks
