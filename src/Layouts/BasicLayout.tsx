import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";

const BasicLayout = () => {
  return (
    <main className={"h-dvh w-[390px] mx-auto bg-white dark:bg-black"}>
      <Header />
      <Outlet />
    </main>
  );
};

export default BasicLayout;
