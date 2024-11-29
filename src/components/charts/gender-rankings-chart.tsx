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
  gender: string;
  average_loss: number;
  count: number;
  fill: string;
  isHighlighted: boolean;
};

type GenderRankingsChartProps = {
  rankings: RankingsReturn["gender_rankings"];
  currentGender?: 0 | 1;
};

export function GenderRankingsChart({
  rankings,
  currentGender,
}: GenderRankingsChartProps) {
  const data = rankings.map((ranking, index) => ({
    gender: ranking.gender === 0 ? "Homem" : "Mulher",
    average_loss: ranking.average_loss,
    count: ranking.count,
    fill:
      ranking.gender === currentGender
        ? `black`
        : `hsl(var(--chart-${index + 1}))`,
    isHighlighted: ranking.gender === currentGender,
    label: ranking.gender === currentGender ? "Você está aqui" : "",
  }));

  return (
    <div className="flex flex-col h-[300px]">
      <h3 className="text-lg font-medium mb-4">Gastos por Gênero</h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -80,
              bottom: 0,
            }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              tickFormatter={(value) =>
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)
              }
            />
            <YAxis dataKey="gender" type="category" width={150} />
            <Tooltip
              formatter={(value: number, _name, entry) => {
                const dataPoint = entry.payload as DataPoint;
                return [
                  <>
                    <div>
                      Gasto média:{" "}
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
            <Bar dataKey="average_loss" radius={[0, 4, 4, 0]} barSize={40}>
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
