export interface Board {
  id: number;
}

export interface DraftBoard extends Omit<Board, "id"> {}
