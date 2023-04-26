import { useEffect, useState } from "react";

export type Domains = string[];
export const useData = <T extends unknown>(url: string) => {
  const [state, setState] = useState<T>();
  const baseUrl = "http://localhost:3001/";
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(`${baseUrl}${url}`)).json();

      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
};
