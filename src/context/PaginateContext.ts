import { createContext } from "react";

export type PaginateDimensions = {
  currentPage: number;
  count: number;
};

interface PaginateContextInterface {
  dimensions: PaginateDimensions;
  setDimensions: React.Dispatch<React.SetStateAction<PaginateDimensions>>;
}

export const PaginateContext = createContext<PaginateContextInterface>({
  dimensions: { currentPage: 0, count: 0 },
  setDimensions: () => {},
});
