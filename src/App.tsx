import { DraftTask, TaskUtils } from "./Task";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Toolbar from "./Toolbar";
import useTasks from "./hooks/useTasks";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useTasks();
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: TaskUtils.getId(tasks) }]);

  return (
    <div className="main">
      <Toolbar
        onClickAdd={() => setShowNewTaskForm(true)}
        onClickClear={() => setTasks([])}
      />

      {showNewTaskForm && (
        <NewTaskForm
          onSave={saveNewTask}
          onClose={() => setShowNewTaskForm(false)}
        />
      )}

      <TaskList tasks={tasks} />
    </div>
  );
}
