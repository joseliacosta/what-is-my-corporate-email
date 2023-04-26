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
};

export const submitForm = async (formValues: Person) => {
  const endpoint = `${baseUrl}email`;
  const JSONdata = JSON.stringify(formValues);

  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  let response;

  try {
    response = await fetch(endpoint, options);
  } catch (error) {
    return "There was an error: " + error;
  }

  if (response?.ok) {
    return response;
  } else {
    return `HTTP Response Code: ${response?.status}`;
  }
};
