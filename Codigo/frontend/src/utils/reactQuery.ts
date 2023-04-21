import { api } from "@/services/services";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { pathToUrl } from "./routerCompile";

export const useFetch = (
  endpoint: string | null,
  params?: object,
  config?: any
) => {
  return useQuery([endpoint!, params], () => api.get(endpoint), {
    enabled: !!endpoint,
    keepPreviousData: true,
    ...config,
  });
};

type MultimethodMutation<T> = {
  data?: any;
  method: "POST" | "PUT" | "DELETE" | "PATCH" | "GET";
  additionalQuery?: string;
  params?: T | object;
};

export const useMultimethodMutation = <T extends object>(
  endpointBase: string,
  defaultParams: object = {},
  invalidateEndpoint?: string
) => {
  const client = useQueryClient();
  const invalidateUrl = invalidateEndpoint;

  return useMutation({
    mutationFn: ({
      data,
      params = {},
      method,
      additionalQuery,
    }: MultimethodMutation<T>) => {
      // const endpoint = pathToUrl(endpointBase, { ...defaultParams, ...params });
      const endpoint = endpointBase + (additionalQuery ?? "");

      if (method == "PUT") {
        return api.put(data, endpoint);
      }

      if (method == "DELETE") {
        return api.delete(endpoint);
      }

      if (method == "PATCH") {
        return api.patch(data, endpoint);
      }

      if (method == "GET") {
        return api.get(endpoint);
      }

      return api.post(data, endpoint);
    },

    onSuccess: () => {
      !!invalidateUrl && client.invalidateQueries(invalidateUrl);
    },
  });
};
