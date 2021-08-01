import { Button } from "theme-ui";
interface ToolbarProps {
  onClickAdd: () => void;
  onClickClear: () => void;
}

export default function Toolbar({ onClickClear, onClickAdd }: ToolbarProps) {
  return (
    <header>
      <h1 style={{ display: "inline-block", marginTop: "0" }}>Carpaccio.app</h1>
      <Button onClick={onClickClear}> Clear State </Button>
      <Button onClick={onClickAdd}> Add Task </Button>
    </header>
  );
}
