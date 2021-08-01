import { useState } from "react";
import { Task, DraftTask, TaskUtils } from "./Task";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const STORAGE_KEY = "my-tasks";

export default function App() {
  const [tasks, setTasksState] = useState<Task[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  const setTasks = (tasks: Task[]) => {
    setTasksState(tasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  };

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: TaskUtils.getId(tasks) }]);

  return (
    <div className="main">
      <h1> Carpaccio.app </h1>

      <button onClick={() => setTasks([])}> Clear State </button>

      <NewTaskForm saveNewTask={saveNewTask} />

      <TaskList tasks={tasks} />
    </div>
  );
}
