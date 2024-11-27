import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { tooltipStyles } from "./tooltip-styles";

type DataPoint = {
  reason: string;
  percentage: number;
  fill: string;
};

const motivationData: DataPoint[] = [
  {
    reason: "Quero ganhar dinheiro",
    percentage: 54,
    fill: "hsl(var(--chart-1))",
  },
  {
    reason: "Gosto da emoção/experiência",
    percentage: 42,
    fill: "hsl(var(--chart-2))",
  },
  {
    reason: "Gosto da competição",
    percentage: 41,
    fill: "hsl(var(--chart-3))",
  },
  {
    reason: "Torna os jogos mais interessantes",
    percentage: 36,
    fill: "hsl(var(--chart-4))",
  },
  { reason: "É um hobby", percentage: 25, fill: "hsl(var(--chart-5))" },
  {
    reason: "Quero experimentar algo novo",
    percentage: 24,
    fill: "hsl(var(--chart-6))",
  },
  {
    reason: "Tenho dinheiro extra para gastar",
    percentage: 19,
    fill: "hsl(var(--chart-7))",
  },
  {
    reason: "Alguém me encorajou a testar",
    percentage: 19,
    fill: "hsl(var(--chart-8))",
  },
];

export function BettorsMotivationChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Motivação dos apostadores</h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={motivationData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              tickFormatter={(value) => `${value}%`}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="reason"
              width={200}
              axisLine={false}
              tickLine={false}
              interval={0}
              height={400}
            />
            <Tooltip
              formatter={(value) => {
                return [
                  <>
                    <div>Porcentagem: {`${value}%`}</div>
                  </>,
                ];
              }}
              {...tooltipStyles}
            />
            <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={20}>
              {motivationData.map((entry) => (
                <Cell key={entry.reason} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
