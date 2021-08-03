import { DraftTask } from "./Task";
import NewTaskForm from "./NewTaskForm";
import NewBoardForm from "./NewBoardForm";
import Toolbar from "./Toolbar";
import useTasks from "./hooks/useTasks";
import useBoards from "./hooks/useBoards";
import { useState } from "react";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "./theme";
import KanbanBoard from "./KanbanBoard";
import KanbanColumn from "./KanbanColumn";
import { getMaxId } from "./utils";
import { DraftBoard } from "./Board";

type Route = "new-task" | "new-board" | "board";

export default function App() {
  const [tasks, setTasks] = useTasks();
  const [boards, setBoards] = useBoards();
  const [route, setRoute] = useState<Route>("board");

  const showNewTaskForm = route === "new-task";
  const showNewBoardForm = route === "new-board";

  const toggleNewTaskForm = () =>
    setRoute(showNewTaskForm ? "board" : "new-task");

  const toggleNewBoardForm = () =>
    setRoute(showNewBoardForm ? "board" : "new-board");

  const saveNewTask = (task: DraftTask) =>
    setTasks([...tasks, { ...task, id: getMaxId(tasks) + 1 }]);

  const saveNewBoard = (board: DraftBoard) =>
    setBoards([...boards, { ...board, id: getMaxId(boards) + 1 }]);

  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ flexDirection: "column" }} p={2}>
        <Toolbar
          onClickClear={() => setTasks([])}
          addTaskText={showNewTaskForm ? "Hide Form" : "Add Task"}
          onToggleAddTask={toggleNewTaskForm}
          addBoardText={showNewBoardForm ? "Hide Form" : "Add Board"}
          onToggleAddBoard={toggleNewBoardForm}
        />

        {showNewTaskForm ? (
          <NewTaskForm onSave={saveNewTask} onClose={toggleNewTaskForm} />
        ) : showNewBoardForm ? (
          <NewBoardForm onSave={saveNewBoard} onClose={toggleNewBoardForm} />
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
