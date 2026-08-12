export interface MenuCategory {
  index: string;
  name: string;
  description: string;
}

// Replace with the real menu when it's ready. These are design
// placeholder categories only — no items, prices, or ingredients
// have been invented.
export const menuCategories: MenuCategory[] = [
  {
    index: "01",
    name: "Coffee",
    description: "A carefully designed space for your daily ritual.",
  },
  {
    index: "02",
    name: "Espresso",
    description: "Serious shots, pulled with attention.",
  },
  {
    index: "03",
    name: "Tea",
    description: "A slower, quieter option on the bar.",
  },
  {
    index: "04",
    name: "Bites",
    description: "Something to go with the cup.",
  },
];
