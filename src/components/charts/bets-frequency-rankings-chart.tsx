import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { tooltipStyles } from "@/pages/data/components/tooltip-styles";
import { RankingsReturn } from "@/services/get-rankings";

type DataPoint = {
  bets_frequency: number;
  average_loss: number;
  count: number;
  fill: string;
  isHighlighted: boolean;
};

type BetsFrequencyRankingsChartProps = {
  rankings: RankingsReturn["bets_frequency_rankings"];
  currentBetsFrequency?: number;
};

export function BetsFrequencyRankingsChart({
  rankings,
  currentBetsFrequency,
}: BetsFrequencyRankingsChartProps) {
  const data = rankings.map((ranking, index) => ({
    bets_frequency: ranking.bets_frequency,
    average_loss: ranking.average_loss,
    count: ranking.count,
    fill:
      ranking.bets_frequency === currentBetsFrequency
        ? `black`
        : `hsl(var(--chart-${index + 1}))`,
    isHighlighted: ranking.bets_frequency === currentBetsFrequency,
    label:
      ranking.bets_frequency === currentBetsFrequency ? "Você está aqui" : "",
  }));

  return (
    <div className="flex flex-col h-[300px]">
      <h3 className="text-lg font-medium mb-4">
        Gastos por Frequência de Apostas
      </h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="bets_frequency"
              type="number"
              domain={["dataMin - 1", "dataMax"]}
              tickFormatter={(value) => `${value} vezes/semana`}
            />
            <YAxis
              tickFormatter={(value) =>
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)
              }
            />
            <Tooltip
              formatter={(value: number, _name, entry) => {
                const dataPoint = entry.payload as DataPoint;
                return [
                  <>
                    <div>
                      Gasto médio:{" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(value)}
                    </div>
                    <div>Quantidade: {dataPoint.count}</div>
                  </>,
                ];
              }}
              labelFormatter={(value) => `${value} vezes/semana`}
              {...tooltipStyles}
            />
            <Bar dataKey="average_loss" radius={[4, 4, 0, 0]} barSize={40}>
              <LabelList
                dataKey="label"
                position="inside"
                style={{
                  fill: "white",
                  color: "black",
                  stroke: "none",
                  fontSize: 14,
                  strokeDasharray: "0",
                }}
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  stroke={entry.isHighlighted ? "gold" : undefined}
                  strokeWidth={entry.isHighlighted ? 4 : 0}
                  strokeDasharray={entry.isHighlighted ? "4 2" : undefined}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
