export interface TaskAttribute {
  meta?: string;
  key: string;
  value: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  attributes: TaskAttribute[];
}

export interface DraftTask extends Omit<Task, "id"> {}
