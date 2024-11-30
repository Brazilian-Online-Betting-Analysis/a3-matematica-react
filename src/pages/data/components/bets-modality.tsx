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
  modality: string;
  percentage: number;
  fill: string;
};

const data: DataPoint[] = [
  {
    modality: "Futebol",
    percentage: 77,
    fill: "hsl(var(--chart-1))",
  },
  {
    modality: "Cassino",
    percentage: 50,
    fill: "hsl(var(--chart-2))",
  },
  {
    modality: "Cassino ao vivo",
    percentage: 25,
    fill: "hsl(var(--chart-3))",
  },
  {
    modality: "Basquete",
    percentage: 21,
    fill: "hsl(var(--chart-4))",
  },
  {
    modality: "Vôlei",
    percentage: 20,
    fill: "hsl(var(--chart-5))",
  },
  {
    modality: "Outros",
    percentage: 2,
    fill: "hsl(var(--chart-6))",
  },
];

export function BetsModalityChart() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Modalidades de apostas</h3>
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
            <YAxis dataKey="modality" type="category" width={150} />
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
        acesso: 07/11/2024) -{" "}
        <a
          href="https://sbvc.com.br/wp-content/uploads/2024/06/Pesquisa-SBVC-AGP-2024-v2.pdf"
          target="_blank"
          className="underline break-all"
        >
          https://sbvc.com.br/wp-content/uploads/2024/06/Pesquisa-SBVC-AGP-2024-v2.pdf
        </a>
      </p>
    </div>
  );
}
