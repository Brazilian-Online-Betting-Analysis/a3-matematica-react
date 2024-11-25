import { Result } from "@/services/get-result-by-id";
import { getResultById } from "@/services/get-result-by-id";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export function ResultPage() {
  const { resultId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Result | null>(null);

  useEffect(() => {
    if (!resultId) return;

    getResultById(resultId)
      .then(setData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [resultId]);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Perfil do Usuário</title>
      </Helmet>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin size-16 text-slate-600" />
        </div>
      ) : data ? (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-red-600">
            Previsão de perda mensal: R$ {data.loss.toFixed(2)} em apostas
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="font-semibold mb-2">Dados Pessoais</h2>
              <ul className="space-y-2">
                <li>Nome: {data.name}</li>
                <li>Idade: {data.age} anos</li>
                <li>Gênero: {data.gender}</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="font-semibold mb-2">Dados de Apostas</h2>
              <ul className="space-y-2">
                <li>Classe Social: {data.social_class}</li>
                <li>Renda Mensal: R$ {data.mensal_income.toFixed(2)}</li>
                <li>Total de apostas realizadas: {data.bets_frequency}</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-yellow-800">
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
  );
}
