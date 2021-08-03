import { Flex, Button, Box } from "theme-ui";
interface ToolbarProps {
  addTaskText: string;
  onToggleAddTask: () => void;
  onClickClear: () => void;
}

export default function Toolbar({
  onClickClear,
  addTaskText,
  onToggleAddTask,
}: ToolbarProps) {
  return (
    <Flex as="header" mb={4}>
      <h1 style={{ margin: "0" }}>Carpaccio.app</h1>
      <Box sx={{ mx: "auto" }} />
      <Button mr={1} bg="muted" color="text" onClick={onClickClear}>
        Clear State
      </Button>
      <Button onClick={onToggleAddTask}>{addTaskText}</Button>
    </Flex>
  );
}
