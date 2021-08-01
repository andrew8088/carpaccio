import { useState } from "react";
import { Task } from "../Task";
import { generateTasks } from "../db";

const STORAGE_KEY = "my-tasks";
const STORE_LOCALLY = false;

function getInitialState(): Task[] {
  const storage = localStorage.getItem(STORAGE_KEY);

  if (storage && STORE_LOCALLY) {
    return JSON.parse(storage);
  } else {
    return generateTasks(2);
  }
}

export default function useTasks(): [Task[], (tasks: Task[]) => void] {
  const [tasks, setTasksState] = useState<Task[]>(getInitialState());

  const setTasks = (tasks: Task[]) => {
    setTasksState(tasks);
    if (tasks.length && STORE_LOCALLY) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return [tasks, setTasks];
}
