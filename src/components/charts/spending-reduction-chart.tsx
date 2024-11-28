import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { tooltipStyles } from "@/pages/data/components/tooltip-styles";

type DataPoint = {
  category: string;
  percentage: number;
  fill: string;
};

const data: DataPoint[] = [
  {
    category: "Roupas",
    percentage: 23,
    fill: "hsl(var(--chart-1))",
  },
  {
    category: "Itens de mercado",
    percentage: 19,
    fill: "hsl(var(--chart-2))",
  },
  {
    category: "Viagens",
    percentage: 19,
    fill: "hsl(var(--chart-3))",
  },
  {
    category: "Refeições fora do lar",
    percentage: 15,
    fill: "hsl(var(--chart-4))",
  },
  {
    category: "Produtos de higiene e beleza",
    percentage: 14,
    fill: "hsl(var(--chart-5))",
  },
  {
    category: "Cuidados com saúde/medicações",
    percentage: 11,
    fill: "hsl(var(--chart-6))",
  },
  {
    category: "Pagamentos de contas",
    percentage: 11,
    fill: "hsl(var(--chart-7))",
  },
];

export function SpendingReductionChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">
        Deixou de comprar para apostar
      </h3>
      <div className="min-h-[300px] h-[300px] relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ percentage }) => `${percentage}%`}
              outerRadius={80}
              dataKey="percentage"
              nameKey="category"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
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
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span>{item.category}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Fonte: Pesquisa Sociedade Brasileira de Varejo e Consumo SBVC (Data de
        acesso: 07/11/2024)
      </p>
    </div>
  );
}
