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
  class: string;
  income: string;
  percentage: number;
};

const COLORS = {
  AB: "hsl(var(--chart-1))", // Upper class (A-B)
  C: "hsl(var(--chart-2))", // Middle class (C)
  DE: "hsl(var(--chart-3))", // Lower class (D-E)
};

const data: DataPoint[] = [
  {
    class: "Classes A-B",
    income: "Acima de R$7.000,00",
    percentage: 13,
  },
  {
    class: "Classe C",
    income: "R$2.400,00 a R$7.000,00",
    percentage: 35,
  },
  {
    class: "Classes D-E",
    income: "Até R$2.400,00",
    percentage: 52,
  },
];

export function SocialClassPieChart() {
  return (
    <div className="flex flex-col h-full">
      <h4 className="text-lg font-medium mb-4">Visualização de Pizza</h4>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="percentage"
              nameKey="class"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((_entry, index) => {
                const colorKey = index === 0 ? "AB" : index === 1 ? "C" : "DE";
                return <Cell key={`cell-${index}`} fill={COLORS[colorKey]} />;
              })}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => {
                const { payload } = props;

                return [
                  <>
                    <span className="font-medium text-black inline-block mb-2">
                      {name}
                    </span>
                    <div>Porcentagem: {`${value}%`}</div>
                    <div>Renda: {payload.income}</div>
                  </>,
                ];
              }}
              {...tooltipStyles}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Fonte: Instituto DataSenado (Data de acesso: 07/11/2024)
      </p>
    </div>
  );
}
