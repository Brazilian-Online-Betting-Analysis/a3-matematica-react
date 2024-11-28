export type RankingsReturn = {
  age_rankings: {
    age: number;
    average_loss: number;
    count: number;
  }[];
  social_class_rankings: {
    social_class: 1 | 2 | 3;
    average_loss: number;
    count: number;
  }[];
  gender_rankings: {
    gender: 0 | 1;
    average_loss: number;
    count: number;
  }[];
  bets_frequency_rankings: {
    bets_frequency: number;
    average_loss: number;
    count: number;
  }[];
};

export async function getRankings() {
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/ranking/all`,
  );

  const data = await response.json();

  console.log(data);

  return data as RankingsReturn;
}
