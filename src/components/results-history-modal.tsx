import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useHistory } from "@/contexts/history-context";

type ResultsHistoryModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ResultsHistoryModal({
  isOpen,
  onOpenChange,
}: ResultsHistoryModalProps) {
  const navigate = useNavigate();
  const { history } = useHistory();

  const handleHistoryItemClick = (id: string) => {
    onOpenChange(false);
    navigate(`/result/${id}`);
  };

  if (history.length === 0) return <div />;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Resultados anteriores</DialogTitle>
          <DialogDescription>
            Os resultados anteriores são armazenados apenas no seu dispositivo.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto">
          {[...history].reverse().map((item, index) => (
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
                  Gasto previsto
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
  );
}
