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
  class: string;
  percentage: number;
  income: string;
  fill: string;
};

const COLORS = {
  AB: "hsl(var(--chart-1))", // Upper class (A-B)
  C: "hsl(var(--chart-2))", // Middle class (C)
  DE: "hsl(var(--chart-3))", // Lower class (D-E)
};

const data: DataPoint[] = [
  {
    class: "Classes A-B",
    percentage: 13,
    income: "Acima de R$7.000,00",
    fill: COLORS.AB,
  },
  {
    class: "Classe C",
    percentage: 35,
    income: "R$2.400,00 a R$7.000,00",
    fill: COLORS.C,
  },
  {
    class: "Classes D-E",
    percentage: 52,
    income: "Até R$2.400,00",
    fill: COLORS.DE,
  },
];

export function SocialClassChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">
        Classe social dos apostadores
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
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="class" type="category" />
            <YAxis unit="%" dataKey="percentage" />
            <Tooltip
              formatter={(value: number, _name: string, props) => {
                const { payload } = props;
                return [
                  <>
                    <div>Porcentagem: {`${value}%`}</div>
                    <div>Renda: {payload.income}</div>
                  </>,
                ];
              }}
              {...tooltipStyles}
            />
            <Bar dataKey="percentage" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Fonte: Instituto DataSenado (Data de acesso: 07/11/2024)
      </p>
    </div>
  );
}
