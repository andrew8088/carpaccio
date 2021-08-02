import { Task } from "./Task";

export default class TaskUtils {
  static getId(tasks: Task[]): number {
    let max = 0;

    tasks.forEach((t) => {
      if (t.id > max) max = t.id;
    });

    return ++max;
  }
}
