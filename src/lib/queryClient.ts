import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
};

const queryClient = new QueryClient(config);

export default queryClient;
