import useSWR, { Fetcher } from "swr";

export type Domains = string[];
export type Person = {
  fullName: string;
  companyDomain: string | null;
};

const fetcher: Fetcher<Domains, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const baseUrl = "http://localhost:3001/";

export const useData = <T extends unknown>(url: string) => {
  const { data, error, isLoading } = useSWR(`${baseUrl}${url}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
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
