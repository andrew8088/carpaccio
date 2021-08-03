import { Box, Flex, Heading } from "theme-ui";
import { Task } from "./Task";
import TaskCard from "./TaskCard";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}

export default function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  return (
    <Box>
      <Heading as="h3">{title}</Heading>
      <Flex sx={{ flexDirection: "column" }}>
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </Flex>
    </Box>
  );
}
