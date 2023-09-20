import { useState, useEffect } from "react";
import { ApiDataType } from "../types";

interface useFetchInterface {
  url?: string;
  setData: React.Dispatch<React.SetStateAction<ApiDataType[]>>;
}

export default function useFetch({
  url = "https://api.spacexdata.com/v3/capsules",
  setData,
}: useFetchInterface) {
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
