import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { tooltipStyles } from "./tooltip-styles";

type DataPoint = {
  amount: string;
  percentage: number;
  fill: string;
};

const data: DataPoint[] = [
  {
    amount: "Muito mais",
    percentage: 25,
    fill: "hsl(var(--chart-1))",
  },
  {
    amount: "Um pouco a mais",
    percentage: 24,
    fill: "hsl(var(--chart-2))",
  },
  {
    amount: "Igual",
    percentage: 18,
    fill: "hsl(var(--chart-3))",
  },
  {
    amount: "Um pouco menos",
    percentage: 21,
    fill: "hsl(var(--chart-4))",
  },
  {
    amount: "Muito menos",
    percentage: 14,
    fill: "hsl(var(--chart-5))",
  },
];

export function AmountOfBettingVersusLastYear() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">
        Quantidade de apostas x ano anterior
      </h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" unit="%" />
            <YAxis dataKey="amount" type="category" width={150} />
            <Tooltip
              formatter={(value: number) => [`${value}%`, "Porcentagem"]}
              {...tooltipStyles}
            />
            <Bar dataKey="percentage" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Fonte: Pesquisa Sociedade Brasileira de Varejo e Consumo SBVC (Data de
        acesso: 07/11/2024)
      </p>
    </div>
  );
}
