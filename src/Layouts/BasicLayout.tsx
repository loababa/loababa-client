import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <main className={"h-dvh w-[390px] mx-auto bg-black"}>
      <Outlet />
    </main>
  );
};

export default BasicLayout;
