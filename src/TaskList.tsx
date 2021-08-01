import { Task } from "./Task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}
    </ul>
  );
}
