import { API_OPTIONS } from "@/services/constant";
import { useEffect, useState } from "react";

export function useFetch<T>(apiUrl: string) {
  const [data, setData] = useState<T | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const fetchAPI = async (endpointUrl: string) => {
    try {
      setLoader(true);
      const response = await fetch(endpointUrl, API_OPTIONS);
      const data = await response.json();
      setLoader(false);
      setData(data);
    } catch (e) {
      setLoader(false);
      console.log(e);
      setError("Error while fetching data");
    }
  };

  useEffect(() => {
    if (apiUrl.length === 0) return;
    fetchAPI(apiUrl);
  }, [apiUrl]);

  return { data, loader, error };
}
