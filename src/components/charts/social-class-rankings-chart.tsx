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
  social_class: string;
  average_loss: number;
  count: number;
  fill: string;
  isHighlighted: boolean;
};

type SocialClassRankingsChartProps = {
  rankings: RankingsReturn["social_class_rankings"];
  currentSocialClass?: 1 | 2 | 3;
};

export function SocialClassRankingsChart({
  rankings,
  currentSocialClass,
}: SocialClassRankingsChartProps) {
  const data = rankings.map((ranking, index) => ({
    social_class:
      ranking.social_class === 1
        ? "A/B"
        : ranking.social_class === 2
          ? "C"
          : "D/E",
    average_loss: ranking.average_loss,
    count: ranking.count,
    fill:
      ranking.social_class === currentSocialClass
        ? `black`
        : `hsl(var(--chart-${index + 1}))`,
    isHighlighted: ranking.social_class === currentSocialClass,
    label: ranking.social_class === currentSocialClass ? "Você está aqui" : "",
  }));

  return (
    <div className="flex flex-col h-[300px]">
      <h3 className="text-lg font-medium mb-4">Gastos por Classe Social</h3>
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
            <XAxis dataKey="social_class" />
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
              {...tooltipStyles}
            />
            <Bar dataKey="average_loss" radius={[4, 4, 0, 0]} barSize={100}>
              <LabelList
                dataKey="label"
                position="top"
                style={{
                  fill: "black",
                  color: "white",
                  stroke: "none",
                  fontSize: 14,
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
