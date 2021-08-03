import { Attribute } from "./Attribute";
import { Button, Flex, Box, Label } from "theme-ui";
import { getOnChangeHandler } from "./utils";
import LabelledInput from "./LabelledInput";

interface AttributeEditorProps {
  attributes: Attribute[];
  setAttributes: (attrs: Attribute[]) => void;
}

export default function AttributeEditor({
  attributes,
  setAttributes,
}: AttributeEditorProps) {
  const change = (idx: number, key: keyof Attribute) => (val: string) => {
    const a = [...attributes];
    a[idx][key] = val;
    setAttributes(a);
  };

  const addAttribute = () => {
    setAttributes([...attributes, { meta: "", key: "", value: "" }]);
  };

  const removeAttribute = (idx: number) => {
    const a = [...attributes];
    a.splice(idx, 1);
    setAttributes(a);
  };

  return (
    <Flex mb={2}>
      <Box sx={{ flex: "1" }}>
        <Label> Attributes </Label>
        <Button mb={2} onClick={addAttribute}>
          New Attribute
        </Button>
      </Box>

      <Box sx={{ flex: "4" }}>
        {attributes.map(({ meta, key, value }, idx) => (
          <Flex key={idx} mb={4}>
            <Box sx={{ flex: "1 1 auto" }}>
              <LabelledInput
                name="Meta"
                value={meta}
                onChange={getOnChangeHandler(change(idx, "meta"))}
                mb={2}
              />
              <LabelledInput
                name="Key"
                value={key}
                onChange={getOnChangeHandler(change(idx, "key"))}
                mb={2}
              />
              <LabelledInput
                name="Value"
                value={value}
                onChange={getOnChangeHandler(change(idx, "value"))}
              />
            </Box>
            <Button ml={1} onClick={() => removeAttribute(idx)}>
              Remove
            </Button>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
