import { useState } from "react";
import { Flex, Box, Heading, Button } from "theme-ui";
import LabelledInput from "./LabelledInput";
import { DraftTask, TaskAttribute } from "./Task";
import TaskAttributeEditor from "./TaskAttributeEditor";
import { getOnChangeHandler } from "./utils";

interface NewTaskFormProps {
  onSave: (task: DraftTask) => void;
  onClose: () => void;
}

export default function NewTaskForm({ onSave, onClose }: NewTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attributes, setAttributes] = useState<TaskAttribute[]>([]);

  return (
    <Box sx={{ maxWidth: "50%" }}>
      <Heading mb={4}> Create New Task </Heading>

      <LabelledInput
        name="Title"
        value={title}
        onChange={getOnChangeHandler(setTitle)}
        mb={4}
      />

      <LabelledInput
        name="Description"
        value={description}
        onChange={getOnChangeHandler(setDescription)}
        mb={4}
      />

      <TaskAttributeEditor
        attributes={attributes}
        setAttributes={setAttributes}
      />

      <Flex>
        <Button
          sx={{ flex: 1 }}
          mr={1}
          bg="muted"
          color="text"
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          sx={{ flex: 1 }}
          ml={1}
          onClick={() => {
            onSave({ title, description, attributes });
            setTitle("");
            setDescription("");
            setAttributes([]);
          }}
        >
          Save
        </Button>
      </Flex>
    </Box>
  );
}
