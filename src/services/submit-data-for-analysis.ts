import { FormSchema } from "@/components/form-dialog";
import { z } from "zod";
import { ResultSchema } from "./get-result-by-id";

export const submitDataForAnalysis = async (
  data: z.output<typeof FormSchema>,
) => {
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/predict-betting-expenses`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        age: data.age,
        gender: data.gender,
        mensal_income: data.monthlyIncome,
        social_class: data.socialClass,
        bets_frequency: data.bettingFrequency,
      }),
    },
  );

  return ResultSchema.parse(await response.json());
};
