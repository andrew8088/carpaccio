import { Tags } from "./Task";

interface TagListProps {
  tags: Tags;
}

const format = (val: any) => {
  if (typeof val === "string") {
    return val;
  }

  if (Array.isArray(val)) {
    return val.join(", ");
  }
};

export default function Taglist({ tags }: TagListProps) {
  return (
    <ul>
      {Object.keys(tags).map((key, i) => (
        <li key={i}>
          <strong>{key}</strong>: {format(tags[key])}
        </li>
      ))}
    </ul>
  );
}
