import { Result } from "@/services/get-result-by-id";
import { getResultById } from "@/services/get-result-by-id";
import { Loader2, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ResultPage() {
  const { resultId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Result | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!resultId) return;

    getResultById(resultId)
      .then(setData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [resultId]);

  const getGenderLabel = (gender: number) => {
    return gender === 1 ? "Homem" : "Mulher";
  };

  const getSocialClassLabel = (socialClass: number) => {
    switch (socialClass) {
      case 1:
        return "A/B";
      case 2:
        return "C";
      case 3:
        return "D/E";
      default:
        return "Não informado";
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    toast.success("Link copiado para a área de transferência!", {
      position: "top-right",
      richColors: true,
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Perfil do Usuário</title>
      </Helmet>

      <main className="pt-32 container min-h-[calc(100vh-209px)]">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin size-16 text-slate-600" />
          </div>
        ) : data ? (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-red-700">
                  Previsão de perda mensal:{" "}
                  <span className="text-red-600">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(data.loss)}
                  </span>
                </h1>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="hover:bg-red-100 flex items-center gap-2"
                >
                  {isCopied ? (
                    <>
                      <Check className="size-4 text-green-600" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span>Compartilhar resultado</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Dados Pessoais
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Nome</span>
                    <span className="font-medium">{data.name}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Idade</span>
                    <span className="font-medium">{data.age} anos</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Gênero</span>
                    <span className="font-medium">
                      {getGenderLabel(data.gender)}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Dados de Apostas
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Classe Social</span>
                    <span className="font-medium">
                      {getSocialClassLabel(data.social_class)}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Renda Mensal</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(data.mensal_income)}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Apostas por semana</span>
                    <span className="font-medium">{data.bets_frequency}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <p className="text-yellow-800 text-center font-medium">
                Atenção: Aposte com responsabilidade. Estabeleça limites e não
                aposte mais do que pode perder.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p>Não foi possível encontrar o resultado</p>
          </div>
        )}
      </main>
    </>
  );
}
