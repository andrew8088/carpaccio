export interface Tags {
  [key: string]: any;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  tags?: Tags;
}

export interface DraftTask extends Omit<Task, "id"> {}
