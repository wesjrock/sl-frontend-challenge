import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";

export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = "http://localhost:4000";

  const fetchData = async () => await request(endpoint, query, variables);

  return useQuery(key, fetchData, config);
};
