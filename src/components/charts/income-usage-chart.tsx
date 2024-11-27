import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { tooltipStyles } from "@/pages/data/components/tooltip-styles";

type DataPoint = {
  name: string;
  percentage: number;
  fill: string;
};

export function IncomeUsageChart() {
  const data: DataPoint[] = [
    { name: "Não, nunca", percentage: 37, fill: "hsl(var(--chart-1))" },
    {
      name: "Sim, foi pontual (apenas 1 vez)",
      percentage: 36,
      fill: "hsl(var(--chart-2))",
    },
    {
      name: "Sim, com frequência",
      percentage: 24,
      fill: "hsl(var(--chart-3))",
    },
    { name: "Sim, sempre", percentage: 3, fill: "hsl(var(--chart-4))" },
  ];

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">
        Prejuízo por uso de renda principal em apostas
      </h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" unit="%" />
            <YAxis dataKey="name" type="category" width={150} />
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
            <Bar dataKey="percentage" fill="#8884d8" radius={[0, 4, 4, 0]} />
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
