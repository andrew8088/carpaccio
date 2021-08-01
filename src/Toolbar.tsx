interface ToolbarProps {
  onClickAdd: () => void;
  onClickClear: () => void;
}

export default function Toolbar({ onClickClear, onClickAdd }: ToolbarProps) {
  return (
    <header>
      <h1 style={{ display: "inline-block", marginTop: "0" }}>Carpaccio.app</h1>
      <button onClick={onClickClear}> Clear State </button>
      <button onClick={onClickAdd}> Add Task </button>
    </header>
  );
}
