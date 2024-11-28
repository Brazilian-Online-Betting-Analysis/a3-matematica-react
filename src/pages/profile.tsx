import { getProfileData } from "@/services/save-profile-data";
import { Helmet } from "react-helmet-async";

export function Profile() {
  // Route is protected, so userData is not null
  const userData = getProfileData()!;

  const totalBets = userData.bettingMonths * 4 * userData.bettingFrequency; // 4 weeks per month

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Perfil do Usuário</title>
      </Helmet>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-red-600">
          Previsão de perda mensal:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(userData.expectedMonthlyLoss)}
          em apostas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold mb-2">Dados Pessoais</h2>
            <ul className="space-y-2">
              <li>Nome: {userData.name}</li>
              <li>Idade: {userData.age} anos</li>
              <li>Gênero: {userData.gender}</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold mb-2">Dados de Apostas</h2>
            <ul className="space-y-2">
              <li>Classe Social: {userData.socialClass}</li>
              <li>Renda Mensal: {userData.monthlyIncome}</li>
              <li>Total de apostas realizadas: {totalBets}</li>
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
    </main>
  );
}
