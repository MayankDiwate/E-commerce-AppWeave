import { Categories } from "@/types/Categories";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { productsData } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterBySearch(serchTerm: string) {
  return productsData.filter((product) => {
    return product.title.toLowerCase().includes(serchTerm.toLowerCase());
  });
}

export function filterByCategory({
  colours,
  genders,
  prices,
  types,
}: Categories) {
  return productsData.filter(({ colour, gender, price, type }) => {
    const matchColour = colours && colours.length > 0
      ? colours.map((c: string) => c.toLowerCase()).includes(colour.toLowerCase())
      : true;
    const matchGender = genders && genders.length > 0
      ? genders.map((g: string) => g.toLowerCase()).includes(gender.toLowerCase())
      : true;
    const matchPrice = prices && prices.length > 0
      ? prices.some((p) => {
          if (p === "< $50") return price < 50;
          if (p === "$50 - $100") return price >= 50 && price < 100;
          if (p === "$100 - $200") return price >= 100 && price < 200;
          if (p === ">= $200") return price >= 200;
          return false;
        })
      : true;
    const matchType = types && types.length > 0
      ? types.map((t: string) => t.toLowerCase()).includes(type.toLowerCase())
      : true;

    return matchColour && matchGender && matchPrice && matchType;
  });
}