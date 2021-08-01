import { useState } from "react";
import { DraftTask } from "./Task";

interface NewTaskFormProps {
  saveNewTask: (task: DraftTask) => void;
}

export default function NewTaskForm({ saveNewTask }: NewTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<{ [key: string]: string }>({});
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

      {Object.keys(tags).map((key, i) => (
        <p key={i}>
          <strong>{key}</strong>: {tags[key]}
        </p>
      ))}

      <button
        onClick={() => {
          saveNewTask({ title, description, tags });
          setTitle("");
          setDescription("");
          setTags({});
        }}
      >
        Save
      </button>
    </section>
  );
}
