export type ProfileData = {
  name: string;
  age: number;
  gender: string;
  socialClass: string;
  bettingFrequency: number;
  monthlyIncome: string;
  bettingMonths: number;
  expectedMonthlyLoss: number;
};

export function saveProfileData(data: ProfileData) {
  localStorage.setItem("profile-data", JSON.stringify(data));
}

export function getProfileData(): ProfileData | null {
  const data = localStorage.getItem("profile-data");
  return data ? JSON.parse(data) : null;
}

export function clearProfileData() {
  localStorage.removeItem("profile-data");
}
