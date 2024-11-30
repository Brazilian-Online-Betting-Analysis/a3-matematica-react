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
  age: string;
  percentage: number;
  fill: string;
};

const data: DataPoint[] = [
  {
    age: "18-29 anos",
    percentage: 33,
    fill: "hsl(var(--chart-1))",
  },
  {
    age: "30-49 anos",
    percentage: 40,
    fill: "hsl(var(--chart-2))",
  },
  {
    age: "50+ anos",
    percentage: 50,
    fill: "hsl(var(--chart-3))",
  },
];

export function AgeChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Idade dos apostadores</h3>
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
            <XAxis dataKey="age" type="category" />
            <YAxis unit="%" dataKey="percentage" />
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
            <Bar dataKey="percentage" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 text-center mt-auto">
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
