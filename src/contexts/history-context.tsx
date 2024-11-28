import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { HistoryContextType, HistoryItem } from "./history-types";

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

type HistoryProviderProps = {
  children: ReactNode;
};

export function HistoryProvider({ children }: HistoryProviderProps) {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const previousResults = localStorage.getItem("previous-results");
    if (previousResults) {
      setHistory(JSON.parse(previousResults));
    }
  }, []);

  const refreshHistory = () => {
    const previousResults = localStorage.getItem("previous-results");
    if (previousResults) {
      setHistory(JSON.parse(previousResults));
    }
  };

  const addHistoryItem = (item: HistoryItem) => {
    const newHistory = [...history, item];
    setHistory(newHistory);
    localStorage.setItem("previous-results", JSON.stringify(newHistory));
  };

  return (
    <HistoryContext.Provider
      value={{ history, refreshHistory, addHistoryItem }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);

  if (context === undefined) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }

  return context;
}
