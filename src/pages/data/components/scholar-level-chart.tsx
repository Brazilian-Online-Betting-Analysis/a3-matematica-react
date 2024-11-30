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
  level: string;
  percentage: number;
  fill: string;
};

const data: DataPoint[] = [
  {
    level: "Fundamental incompleto",
    percentage: 23,
    fill: "hsl(var(--chart-1))",
  },
  {
    level: "Fundamental completo",
    percentage: 18,
    fill: "hsl(var(--chart-2))",
  },
  {
    level: "Médio completo",
    percentage: 40,
    fill: "hsl(var(--chart-3))",
  },
  {
    level: "Superior incompleto ou mais",
    percentage: 20,
    fill: "hsl(var(--chart-4))",
  },
];

export function ScholarLevelChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Nível de escolaridade</h3>
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
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="level" type="category" />
            <YAxis unit="%" dataKey="percentage" />
            <Tooltip
              formatter={(value: number) => [`${value}%`, "Porcentagem"]}
              {...tooltipStyles}
            />
            <Bar dataKey="percentage" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Fonte: Instituto DataSenado (Data de acesso: 07/11/2024) -{" "}
        <a
          href="https://www12.senado.leg.br/noticias/arquivos/2024/09/30/relatorio_apostasesportivas-golpesdigitais-endividamento-1.pdf"
          target="_blank"
          className="underline break-all"
        >
          https://www12.senado.leg.br/noticias/arquivos/2024/09/30/relatorio_apostasesportivas-golpesdigitais-endividamento-1.pdf
        </a>
      </p>
    </div>
  );
}
