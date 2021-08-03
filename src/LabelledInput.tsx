import { Flex, Label, Input } from "theme-ui";
interface LabelledInputProps {
  name: string;
  value?: string;
  onChange: (evt: any) => void;
  mb?: any;
}

export default function LabelledInput({
  name,
  value,
  onChange,
  mb,
}: LabelledInputProps) {
  return (
    <Flex>
      <Label htmlFor={name} sx={{ flex: "1" }}>
        {name}
      </Label>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        mb={mb}
        sx={{ flex: "4" }}
      />
    </Flex>
  );
}
