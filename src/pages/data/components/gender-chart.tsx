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
  gender: string;
  percentage: number;
};

const data: DataPoint[] = [
  {
    gender: "Homem",
    percentage: 62,
  },
  {
    gender: "Mulher",
    percentage: 38,
  },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

export function GenderChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Gênero dos apostadores</h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="percentage"
              nameKey="gender"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                return [
                  <>
                    <span className="font-medium text-black inline-block mb-2">
                      {name}
                    </span>
                    <div>Porcentagem: {`${value}%`}</div>
                  </>,
                ];
              }}
              {...tooltipStyles}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-500 text-center mt-auto">
        Fonte: Instituto DataSenado (Data de acesso: 07/11/2024)
      </p>
    </div>
  );
}
