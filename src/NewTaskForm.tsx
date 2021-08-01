import { useState } from "react";
import { DraftTask, Tags } from "./Task";
import TagList from "./TagList";

interface NewTaskFormProps {
  onSave: (task: DraftTask) => void;
  onClose: () => void;
}

export default function NewTaskForm({ onSave, onClose }: NewTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<Tags>({});
  const [key, setKey] = useState("");
  const [val, setVal] = useState("");

  return (
    <section
      style={{
        border: "1px solid #ccc",
        padding: "0 10px 10px 10px",
      }}
    >
      <h1> Create New Task </h1>

      <p>
        Title:
        <input
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
      </p>

      <p>
        Description:{" "}
        <textarea
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
      </p>

      <h2> Tags </h2>

      <p>
        <input
          placeholder="key"
          value={key}
          onChange={(evt) => setKey(evt.target.value)}
        />{" "}
        <input
          placeholder="value"
          value={val}
          onChange={(evt) => setVal(evt.target.value)}
        />
        <button
          onClick={() => {
            setTags({
              ...tags,
              [key]: val,
            });
            setKey("");
            setVal("");
          }}
        >
          +
        </button>
      </p>

      <TagList tags={tags} />

      <button
        onClick={() => {
          onSave({ title, description, tags });
          setTitle("");
          setDescription("");
          setTags({});
        }}
      >
        Save
      </button>
      <button onClick={onClose}>Close</button>
    </section>
  );
}
