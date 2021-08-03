import { Box, Heading } from "theme-ui";
import { DraftBoard } from "./Board";
interface NewBoardFormProps {
  onSave: (d: DraftBoard) => void;
  onClose: () => void;
}

export default function NewBoardForm({ onSave, onClose }: NewBoardFormProps) {
  return (
    <Box sx={{ maxWidth: "50%" }}>
      <Heading>New Board</Heading>
    </Box>
  );
}
