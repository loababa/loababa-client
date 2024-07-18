import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router.tsx";
import { ThemeProvider } from "@/components/Provider/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    defaultTheme="dark"
    storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
