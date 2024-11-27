import { AgeChart } from "./components/age-chart";
import { AmountOfBettingVersusLastYear } from "./components/amount-of-betting-versus-last-year";
import { BetsModalityChart } from "./components/bets-modality";
import { GenderChart } from "./components/gender-chart";
import { DataPageHero } from "./components/hero";
import { MarketSituationChart } from "./components/market-situation";
import { ScholarLevelChart } from "./components/scholar-level-chart";
import { SocialClassChart } from "./components/social-class-chart";
import { SocialClassPieChart } from "./components/social-class-pie-chart";
import { BettorsMotivationChart } from "./components/bettors-motivation-chart";
import { BettingResultsChart } from "./components/betting-results-chart";
import { Helmet } from "react-helmet-async";

export function DataPage() {
  return (
    <>
      <Helmet>
        <title>Dados usados para a análise</title>
      </Helmet>

      <main className="mx-auto flex flex-col gap-16">
        <DataPageHero />

        <div className="space-y-16 container">
          <section>
            <p className="text-gray-800 text-lg mb-8">
              Como podemos perceber pelos gráficos a seguir, a maioria dos
              apostadores é de homens, principalmente ou destacadamente entre 30
              e 49 anos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <AgeChart />
              </div>
              <div>
                <GenderChart />
              </div>
            </div>
          </section>

          <section>
            <p className="text-gray-800 text-lg mb-8">
              Em relação à poder econômico, os apostadores são majoritariamente
              de classe social D ou E. Indicamos com a tabela qual são as faixas
              de renda para cada classe social.
            </p>

            <div>
              <h3 className="text-xl font-medium mb-4">
                Classe social dos apostadores
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <SocialClassChart />
                </div>
                <div>
                  <SocialClassPieChart />
                </div>
              </div>
            </div>
          </section>

          <section>
            <p className="text-gray-800 text-lg mb-8">
              Os dados acerca da escolaridade apontam para apostadores com
              ensino médio como principais, e sobre situação empregatícia dos
              apostadores, vale ressaltar que quase um terço dos apostadores
              está fora do mercado, que inclui aposentados, e pessoas que não
              procuram emprego.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8">
              Perfil educacional e profissional
            </h2>
            <p className="text-gray-800 text-lg mb-8">
              Os dados acerca da escolaridade apontam para apostadores com
              ensino médio como principais, e sobre situação empregatícia dos
              apostadores, vale ressaltar que quase um terço dos apostadores
              está fora do mercado, que inclui aposentados, e pessoas que não
              procuram emprego.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ScholarLevelChart />
              </div>
              <div>
                <MarketSituationChart />
              </div>
            </div>
          </section>

          <section>
            <p className="text-gray-800 text-lg mb-8">
              A principais modalidades de apostas são futebol, esporte mais
              popular, e cassinos em jogos de slots (inclui o "Tigrinho"). O
              gráfico seguinte mostra uma tendência de crescimento das apostas,
              se observarmos os 49% que responderam aumento de apostas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <BetsModalityChart />
              </div>
              <div>
                <AmountOfBettingVersusLastYear />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8">Como se comportam?</h2>
            <p className="text-gray-800 text-lg mb-8">
              Agora podemos perceber uma relação direta entre comportamento dos
              consumidores sendo alterado por conta das apostas. A renda
              principal pode ser salário, pensão ou outras formas de renda.
              Podemos perceber que até 63% das pessoas na pesquisa tiveram
              prejuízos relacionados a apostas. A segunda figura mostra o que
              foi deixado de comprar, por conta de apostas. Notemos que itens de
              primeira importância como itens de mercado, medicações e até
              pagamentos de contas foram afetados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {/* CHART GOES HERE */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Fonte: Pesquisa Sociedade Brasileira de Varejo e Consumo SBVC
                  (Data de acesso: 07/11/2024)
                </p>
              </div>
              <div>
                {/* CHART GOES HERE */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Fonte: Pesquisa Sociedade Brasileira de Varejo e Consumo SBVC
                  (Data de acesso: 07/11/2024)
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-gray-800 text-lg mb-8">
              Ao analisarmos a pesquisa de motivação, que possibilitou múltiplas
              respostas, e os resultados das apostas, podemos perceber que
              muitos apostadores se iludem com a perspectiva de ganhar dinheiro,
              se percebermos que somente 23% dos apostadores ganham.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <BettorsMotivationChart />
              </div>
              <div>
                <BettingResultsChart />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
