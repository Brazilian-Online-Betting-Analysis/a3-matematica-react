export type HistoryItem = {
  id: string;
  loss: number;
};

export type HistoryContextType = {
  history: HistoryItem[];
  refreshHistory: () => void;
  addHistoryItem: (item: HistoryItem) => void;
};
