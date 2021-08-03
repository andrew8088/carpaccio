import { Flex, Button, Box } from "theme-ui";
interface ToolbarProps {
  addTaskText: string;
  addBoardText: string;
  onToggleAddTask: () => void;
  onToggleAddBoard: () => void;
  onClickClear: () => void;
}

export default function Toolbar({
  onClickClear,
  addTaskText,
  addBoardText,
  onToggleAddTask,
  onToggleAddBoard,
}: ToolbarProps) {
  return (
    <Flex as="header" mb={4}>
      <h1 style={{ margin: "0" }}>Carpaccio.app</h1>
      <Box sx={{ mx: "auto" }} />
      <Button ml={1} bg="muted" color="text" onClick={onClickClear}>
        Clear State
      </Button>
      <Button ml={1} onClick={onToggleAddTask}>
        {addTaskText}
      </Button>
      <Button ml={1} onClick={onToggleAddBoard}>
        {addBoardText}
      </Button>
    </Flex>
  );
}
