import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { tooltipStyles } from "./tooltip-styles";

type DataPoint = {
  situation: string;
  percentage: number;
};

const COLORS = {
  occupied: "hsl(var(--chart-1))",
  unemployed: "hsl(var(--chart-2))",
  outOfWork: "hsl(var(--chart-3))",
};

const data: DataPoint[] = [
  {
    situation: "Ocupado",
    percentage: 68,
  },
  {
    situation: "Desocupado",
    percentage: 5,
  },
  {
    situation: "Fora da força de trabalho",
    percentage: 27,
  },
];

export function MarketSituationChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Situação no mercado</h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="percentage"
              nameKey="situation"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((_entry, index) => {
                const colorKey =
                  index === 0
                    ? "occupied"
                    : index === 1
                      ? "unemployed"
                      : "outOfWork";
                return <Cell key={`cell-${index}`} fill={COLORS[colorKey]} />;
              })}
            </Pie>
            <Tooltip
              formatter={(value, _name, props) => {
                const { payload } = props;
                return [
                  <>
                    <span className="font-medium text-black inline-block mb-2">
                      {payload.situation}
                    </span>
                    <div>Porcentagem: {`${value}%`}</div>
                  </>,
                ];
              }}
              {...tooltipStyles}
            />
            <Legend iconType="circle" />
          </PieChart>
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
