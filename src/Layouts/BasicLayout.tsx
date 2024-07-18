import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";

interface BasicLayoutProps {
  withHeader?: boolean;
  withHeaderOptions?: {
    leftUI?: React.ReactNode;
    rightUI?: React.ReactNode;
    title?: string;
  };
}

const BasicLayout = ({ withHeader, withHeaderOptions }: BasicLayoutProps) => {
  return (
    <main className={"h-dvh w-[390px] mx-auto bg-white dark:bg-black"}>
      {withHeader && <Header {...withHeaderOptions} />}
      <Outlet />
    </main>
  );
};

export default BasicLayout;
