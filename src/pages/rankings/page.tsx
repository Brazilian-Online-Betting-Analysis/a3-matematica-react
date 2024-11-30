import { AgeRankingsChart } from "@/components/charts/age-rankings-chart";
import { BetsFrequencyRankingsChart } from "@/components/charts/bets-frequency-rankings-chart";
import { GenderRankingsChart } from "@/components/charts/gender-rankings-chart";
import { SocialClassRankingsChart } from "@/components/charts/social-class-rankings-chart";
import { getRankings, RankingsReturn } from "@/services/get-rankings";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export function RankingsPage() {
  const [rankings, setRankings] = useState<RankingsReturn | null>(null);

  useEffect(() => {
    getRankings().then(setRankings);
  }, []);

  return (
    <>
      <Helmet>
        <title>Rankings</title>
      </Helmet>

      <main className="min-h-[calc(100vh-209px)] pb-32 flex flex-col gap-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-32">
          <div className="container">
            <h1 className="text-5xl font-bold text-white mb-6 items-center inline-flex gap-4">
              <Trophy className="size-12" />
              Rankings
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Todos os dados são anônimos e não identificam nenhum usuário
              específico. Embora salvemos os nomes, não os retornamos para a
              exibição por questões de privacidade
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24 container">
          <AgeRankingsChart rankings={rankings?.age_rankings ?? []} />
          <SocialClassRankingsChart
            rankings={rankings?.social_class_rankings ?? []}
          />
          <GenderRankingsChart rankings={rankings?.gender_rankings ?? []} />
          <BetsFrequencyRankingsChart
            rankings={rankings?.bets_frequency_rankings ?? []}
          />
        </div>
      </main>
    </>
  );
}
