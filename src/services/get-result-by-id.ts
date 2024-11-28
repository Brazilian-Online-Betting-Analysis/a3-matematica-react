import { z } from "zod";

export const ResultSchema = z.object({
  id: z.string(),
  r2: z.number(),
  loss: z.number(),
  name: z.string(),
  age: z.number(),
  gender: z.union([z.literal(0), z.literal(1)]),
  social_class: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  bets_frequency: z.number(),
  mensal_income: z.number(),
});

export type Result = z.infer<typeof ResultSchema>;

export const getResultById = async (resultId: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/predict-betting-expenses/${resultId}`,
  );

  const data = await response.json();
  const parsedData = ResultSchema.parse(data);

  return parsedData;
};
