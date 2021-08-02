import { DraftTask, TaskUtils } from "./Task";
import NewTaskForm from "./NewTaskForm";
import Toolbar from "./Toolbar";
import useTasks from "./hooks/useTasks";
import { useState } from "react";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "./theme";
import KanbanBoard from "./KanbanBoard";

export default function App() {
  const [tasks, setTasks] = useTasks();
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: TaskUtils.getId(tasks) }]);

  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ flexDirection: "column" }} p={2}>
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
        <KanbanBoard
          columns={[
            { name: "Inbox", tasks: tasks.slice(0, 4) },
            { name: "To Do", tasks: tasks.slice(5, 9) },
            { name: "In Progress", tasks: tasks.slice(10, 14) },
            { name: "Measuring / Watching", tasks: tasks.slice(15, 19) },
            { name: "Completed", tasks: tasks.slice(20, 24) },
          ]}
        />
      </Flex>
    </ThemeProvider>
  );
}
