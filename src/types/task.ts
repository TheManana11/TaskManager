
export type TaskFilter = "All" | "Pending" | "Completed";

export type TaskPriority = "Low" | "Medium" | "High";

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
  status: 'Pending' | 'Completed';
}
