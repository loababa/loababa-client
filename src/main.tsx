import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router.tsx";
import { ThemeProvider } from "@/components/Provider/ThemeProvider.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    <Toaster
      richColors
      position="top-center"
    />
  </QueryClientProvider>
);
