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
  age: number;
  average_loss: number;
  count: number;
  fill: string;
  isHighlighted: boolean;
};

type AgeRankingsChartProps = {
  rankings: RankingsReturn["age_rankings"];
  currentAge?: number;
};

export function AgeRankingsChart({
  rankings,
  currentAge,
}: AgeRankingsChartProps) {
  const data = rankings.map((ranking, index) => ({
    age: ranking.age,
    average_loss: ranking.average_loss,
    count: ranking.count,
    fill:
      ranking.age === currentAge ? `black` : `hsl(var(--chart-${index + 1}))`,
    isHighlighted: ranking.age === currentAge,
    label: ranking.age === currentAge ? "Você está aqui" : "",
  }));

  return (
    <div className="flex flex-col h-[300px]">
      <h3 className="text-lg font-medium mb-4">Gastos por Idade</h3>
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
              dataKey="age"
              type="number"
              domain={["dataMin - 2", "auto"]}
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
                  stroke={entry.age === currentAge ? "gold" : undefined}
                  strokeWidth={entry.age === currentAge ? 4 : 0}
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
