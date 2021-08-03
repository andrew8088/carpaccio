import { DraftTask } from "./Task";
import TaskUtils from "./TaskUtils";
import NewTaskForm from "./NewTaskForm";
import Toolbar from "./Toolbar";
import useTasks from "./hooks/useTasks";
import { useState } from "react";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "./theme";
import KanbanBoard from "./KanbanBoard";
import KanbanColumn from "./KanbanColumn";

export default function App() {
  const [tasks, setTasks] = useTasks();
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: TaskUtils.getId(tasks) }]);

  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ flexDirection: "column" }} p={2}>
        <Toolbar
          addTaskText={showNewTaskForm ? "Hide Form" : "Add Task"}
          onToggleAddTask={() => setShowNewTaskForm(!showNewTaskForm)}
          onClickClear={() => setTasks([])}
        />

        {showNewTaskForm ? (
          <NewTaskForm
            onSave={saveNewTask}
            onClose={() => setShowNewTaskForm(false)}
          />
        ) : (
          <KanbanBoard>
            <KanbanColumn title="Inbox" tasks={tasks.slice(0, 4)} />
            <KanbanColumn title="To Do" tasks={tasks.slice(5, 9)} />
            <KanbanColumn title="In Progress" tasks={tasks.slice(10, 14)} />
            <KanbanColumn
              title="Measuring / Watching"
              tasks={tasks.slice(15, 19)}
            />
            <KanbanColumn title="Completed" tasks={tasks.slice(20, 24)} />
          </KanbanBoard>
        )}
      </Flex>
    </ThemeProvider>
  );
}
