export interface Task {
  id: number;
  title: string;
  description: string;
  tags?: {
    [key: string]: string;
  };
}

export interface DraftTask extends Omit<Task, "id"> {}

export class TaskUtils {
  static getId(tasks: Task[]): number {
    let max = 0;

    tasks.forEach((t) => {
      if (t.id > max) max = t.id;
    });

    return max++;
  }
}
