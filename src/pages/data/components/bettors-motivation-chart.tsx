import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type MotivationData = {
  reason: string;
  percentage: number;
}[];

const motivationData: MotivationData = [
  { reason: "Quero ganhar dinheiro", percentage: 54 },
  { reason: "Gosto da emoção/experiência", percentage: 42 },
  { reason: "Gosto da competição", percentage: 41 },
  { reason: "Torna os jogos mais interessantes", percentage: 36 },
  { reason: "É um hobby", percentage: 25 },
  { reason: "Quero experimentar algo novo", percentage: 24 },
  { reason: "Tenho dinheiro extra para gastar", percentage: 19 },
  { reason: "Alguém me encorajou a testar", percentage: 19 },
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
            margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
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
              width={110}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => {
                return [
                  <>
                    <div>Porcentagem: {`${value}%`}</div>
                  </>,
                ];
              }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            />
            <Bar
              dataKey="percentage"
              fill="hsl(var(--chart-1))"
              radius={[0, 4, 4, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
