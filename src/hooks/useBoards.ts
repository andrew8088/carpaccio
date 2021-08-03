import { useState } from "react";
import { Board } from "../Board";

const STORAGE_KEY = "my-boards";
const STORE_LOCALLY = true;

export default function useBoards(): [Board[], (boards: Board[]) => void] {
  const [boards, setBoardsState] = useState<Board[]>([]);

  const setBoards = (boards: Board[]) => {
    setBoardsState(boards);
    if (boards.length && STORE_LOCALLY) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return [boards, setBoards];
}
