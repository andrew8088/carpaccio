import { Attribute } from "./Attribute";

export interface Task {
  id: number;
  title: string;
  description: string;
  attributes: Attribute[];
}

export interface DraftTask extends Omit<Task, "id"> {}
