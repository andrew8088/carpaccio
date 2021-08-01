import { Task } from "./Task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {tasks.map((t) => (
        <li key={t.id}>
          <TaskCard key={t.id} task={t} />
        </li>
      ))}
    </ul>
  );
}
