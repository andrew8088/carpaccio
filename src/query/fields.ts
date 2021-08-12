import { Task } from "../Task";
import { Attribute } from "../Attribute";

interface QueryableTaskFields extends Omit<Task, "id" | "attributes"> {}

export type TaskField = keyof QueryableTaskFields;

const TASK: QueryableTaskFields = {
  title: "<title>",
  description: "<description>",
};

export function isTaskField(field: any): field is TaskField {
  return field in TASK;
}

interface QueryableAttributeFields extends Attribute {}

export type AttributeField = keyof QueryableAttributeFields;

const ATTRIBUTE: QueryableAttributeFields = {
  meta: "<meta>",
  key: "<key>",
  value: "<value>",
};

export function isAttributeField(field: any): field is AttributeField {
  return field in ATTRIBUTE;
}
