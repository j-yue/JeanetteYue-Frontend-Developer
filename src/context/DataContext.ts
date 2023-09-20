import { createContext } from "react";
import { ApiDataType } from "../components/types";

interface DataContextInterface {
  data: ApiDataType[];
  setData: React.Dispatch<React.SetStateAction<ApiDataType[]>> | null;
}
export const DataContext = createContext<DataContextInterface>({
  data: [],
  setData: null,
});
