import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { History } from "lucide-react";

type HistoryItem = {
  id: string;
  loss: number;
};

export function ResultsHistoryModal() {
  const navigate = useNavigate();
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const previousResults = localStorage.getItem("previous-results");
    if (previousResults) {
      setHistory(JSON.parse(previousResults));
    }
  }, []);

  const handleHistoryItemClick = (id: string) => {
    setShowHistoryModal(false);
    navigate(`/result/${id}`);
  };

  if (history.length === 0) return <div />;

  return (
    <div className="flex justify-end items-center">
      <Dialog open={showHistoryModal} onOpenChange={setShowHistoryModal}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <History className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Resultados anteriores</DialogTitle>
          </DialogHeader>
          <div className="max-h-96 overflow-y-auto">
            {history.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleHistoryItemClick(item.id)}
                className="group w-full text-left p-4 hover:bg-gray-50 rounded-lg mb-2 flex justify-between items-center border border-gray-200 transition-all hover:shadow-sm"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-500">Resultado</span>
                  <span className="font-medium text-gray-900 group-hover:text-gray-700">
                    #{history.length - index}
                  </span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    Perda prevista
                  </span>
                  <span className="font-medium text-red-600 group-hover:text-red-500">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.loss)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
