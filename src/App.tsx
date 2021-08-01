import { useState } from "react";
import { Task, DraftTask, TaskUtils } from "./Task";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: TaskUtils.getId(tasks) }]);

  return (
    <div className="main">
      <h1> Carpaccio.app </h1>

      <NewTaskForm saveNewTask={saveNewTask} />

      <TaskList tasks={tasks} />
    </div>
  );
}
