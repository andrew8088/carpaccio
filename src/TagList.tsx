interface TagListProps {
  tags: {
    [key: string]: string;
  };
}

export default function Taglist({ tags }: TagListProps) {
  return (
    <ul>
      {Object.keys(tags).map((key, i) => (
        <li key={i}>
          <strong>{key}</strong>: {tags[key]}
        </li>
      ))}
    </ul>
  );
}
