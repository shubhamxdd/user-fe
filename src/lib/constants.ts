export const domains = [
  "Business Development",
  "Finance",
  "It",
  "Management",
  "Marketing",
  "Sales",
  "UI Designing",
] as const;
export type Domain = (typeof domains)[number];
export const gender = [
  "Agender",
  "Bigender",
  "Female",
  "Genderfluid",
  "Genderqueer",
  "Male",
  "Non-binary",
  "Polygender",
] as const;
export type Gender = (typeof gender)[number];
export const available = [true, false];
