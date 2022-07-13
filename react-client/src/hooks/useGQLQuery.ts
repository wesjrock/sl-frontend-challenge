import { useQuery } from "react-query";
import { request } from "graphql-request";

export const useGQLQuery = (
  key: any,
  query: any,
  config = { refetchOnWindowFocus: false }
) => {
  const endpoint = "http://localhost:4000";
  const fetchData = async () => await request(endpoint, query);

  return useQuery(key, fetchData, config);
};
