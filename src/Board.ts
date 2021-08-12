export interface Board {
  id: number;
  boardFilter: string;
  columnFilter: string;
}

export interface DraftBoard extends Omit<Board, "id"> {}
