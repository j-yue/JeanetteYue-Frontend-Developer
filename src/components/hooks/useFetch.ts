import { useState, useEffect } from "react";
import { ApiDataType } from "../types";
import { ENDPT } from "../../globalVariables";
interface useFetchInterface {
  url?: string;
  setData: React.Dispatch<React.SetStateAction<ApiDataType[]>>;
}

export default function useFetch({ url = ENDPT, setData }: useFetchInterface) {
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData(_url: string) {
      try {
        const response = await fetch(_url);
        const _data = await response.json();
        setData(() => _data);
      } catch {
        setError(() => true);
      }
    }

    fetchData(url);
  }, [error, url, setData]);
}
