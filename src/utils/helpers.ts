import { ICategory } from "../components/CategoryCard";

export const isNavActive = (str: string) => {
  return window.location.pathname === str;
};
export const getFilteredObjects = (arr: ICategory[], query: string) => {
  return arr?.filter((row: any) => {
    return Object.values(row).some((el) =>
      String(el).toLowerCase().includes(query.toLowerCase())
    );
  });
};
export const trauncateString = (word: string, length: number) => {
  return word.length > length ? word.substring(0, length) + "..." : word;
};
