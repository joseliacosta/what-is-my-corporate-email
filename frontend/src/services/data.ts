import { useEffect, useState } from "react";

export type Domains = string[];
export type Person = {
  fullName: string;
  companyDomain: string | null;
};

const baseUrl = "http://localhost:3001/";
export const useData = <T extends unknown>(url: string) => {
  const [state, setState] = useState<T>();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(`${baseUrl}${url}`)).json();

      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
};

export const useSubmitForm = async (formValues: Person) => {
  const JSONdata = JSON.stringify(formValues);

  const endpoint = `${baseUrl}email`;

  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  const result = await response.json();
  return result;
};
