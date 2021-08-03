import { Grid, Box, Heading, Flex } from "theme-ui";
import { Task } from "./Task";

interface KanbanBoardProps {
  columns: Array<{
    name: string;
    tasks: Task[];
  }>;
}

export default function KanbanBoard({ columns }: KanbanBoardProps) {
  return (
    <Grid columns={columns.length}>
      {columns.map((col, idx) => (
        <Box key={idx}>
          <Heading>{col.name}</Heading>
          <Flex sx={{ flexDirection: "column" }}>
            {col.tasks.map((task, idx) => (
              <Box key={idx}>
                <Heading as="h3">{task.title}</Heading>
                <pre>{JSON.stringify(task.attributes)}</pre>
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Grid>
  );
}
