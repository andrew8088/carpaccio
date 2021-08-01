import { useState } from "react";
import { Task, DraftTask, TaskUtils } from "./Task";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { generateTasks } from "./db";

const STORAGE_KEY = "my-tasks";

function getInitialState(): Task[] {
  const storage = localStorage.getItem(STORAGE_KEY);

  if (storage) {
    return JSON.parse(storage);
  } else {
    return generateTasks(2);
  }
}

export default function App() {
  const [tasks, setTasksState] = useState<Task[]>(getInitialState());

  const setTasks = (tasks: Task[]) => {
    setTasksState(tasks);
    if (tasks.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
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
