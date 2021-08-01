import { DraftTask, TaskUtils } from "./Task";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Toolbar from "./Toolbar";
import useTasks from "./hooks/useTasks";

export default function App() {
  const [tasks, setTasks] = useTasks();

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: TaskUtils.getId(tasks) }]);

  return (
    <div className="main">
      <Toolbar onClickAdd={() => null} onClickClear={() => setTasks([])} />

      <NewTaskForm saveNewTask={saveNewTask} />

      <TaskList tasks={tasks} />
    </div>
  );
}
