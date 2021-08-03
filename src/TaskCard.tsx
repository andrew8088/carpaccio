import { Avatar, Badge, Box, Heading } from "theme-ui";
import { Task } from "./Task";

interface TaskCardProps {
  task: Task;
}
export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Box bg="muted" p={2} m={2}>
      <Heading as="h2" pb={2}>
        {task.title}
      </Heading>
      <Box>
        {task.attributes
          .filter((x) => x.meta === "assignee")
          .map(({ meta, key, value }, tx) => (
            <Avatar
              src={`https://ui-avatars.com/api/?name=${key}&background=random`}
            />
          ))}
      </Box>
      <Box>
        {task.attributes
          .filter((x) => x.meta === "team")
          .map(({ meta, key, value }, tx) => (
            <Badge mr={1}>
              {key}:{value}
            </Badge>
          ))}
      </Box>
      {/* <pre>{JSON.stringify(task.attributes, null, 2)}</pre> */}
    </Box>
  );
}
