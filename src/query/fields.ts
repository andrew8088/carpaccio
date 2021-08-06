import { Brand } from "../utils";
export const taskFields = ["title", "description"];
export type TaskField = Brand<typeof taskFields[number], "TaskField">;

export function isTaskField(field: any): field is TaskField {
  return taskFields.includes(field);
}

export const attributeFields = ["meta", "key", "value"];
export type AttributeField = Brand<
  typeof attributeFields[number],
  "AttributeField"
>;

export function isAttributeField(field: any): field is AttributeField {
  return attributeFields.includes(field);
}
