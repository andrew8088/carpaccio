import { Task } from "./Task";
import TagList from "./TagList";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <section style={{ border: "1px solid #ececec", borderRadius: "5px" }}>
      <h1>
        <strong>#{task.id}</strong>: {task.title}
      </h1>

      <p> {task.description}</p>

      {task.tags && <TagList tags={task.tags} />}
    </section>
  );
}
