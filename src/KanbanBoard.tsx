import { ReactNode } from "react";
import { Grid } from "theme-ui";

interface KanbanBoardProps {
  children: ReactNode | ReactNode[];
}

export default function KanbanBoard({ children }: KanbanBoardProps) {
  return (
    <Grid columns={Array.isArray(children) ? children.length : 1}>
      {children}
    </Grid>
  );
}
