import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { tooltipStyles } from "./tooltip-styles";

type DataPoint = {
  result: string;
  percentage: number;
  fill: string;
};

const data: DataPoint[] = [
  {
    result: "Perderam mais do que ganharam",
    percentage: 60,
    fill: "hsl(var(--chart-1))",
  },
  {
    result: "Ganharam mais do que perderam",
    percentage: 23,
    fill: "hsl(var(--chart-2))",
  },
  {
    result: "Não ganharam nem perderam",
    percentage: 17,
    fill: "hsl(var(--chart-3))",
  },
];

export function BettingResultsChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Resultados das apostas</h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="percentage"
              nameKey="result"
              label
            >
              {data.map((entry) => (
                <Cell key={entry.result} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                return [
                  <>
                    <span className="font-medium inline-block mb-2">
                      {name}
                    </span>
                    <div>Porcentagem: {`${value}%`}</div>
                  </>,
                ];
              }}
              {...tooltipStyles}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 min-w-3 min-h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span>{item.result}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Fonte: Strategy& - PWC (Data de acesso: 07/11/2024) -{" "}
        <a
          href="https://www.strategyand.pwc.com/br/pt/relatorios/impacto_apostas_esportivas_consumo_pub_strategy_2024.pdf"
          target="_blank"
          className="underline break-all"
        >
          https://www.strategyand.pwc.com/br/pt/relatorios/impacto_apostas_esportivas_consumo_pub_strategy_2024.pdf
        </a>
      </p>
    </div>
  );
}
