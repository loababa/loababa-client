import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

interface BasicLayoutProps {
  withHeader?: boolean;
  withHeaderOptions?: {
    leftUI?: React.ReactNode;
    rightUI?: React.ReactNode;
    title?: string;
  };
  withFooter?: boolean;
}

const BasicLayout = ({
  withHeader,
  withHeaderOptions,
  withFooter
}: BasicLayoutProps) => {
  return (
    <main className={"h-dvh w-[390px] mx-auto bg-white dark:bg-black"}>
      {withHeader && <Header {...withHeaderOptions} />}
      <Outlet />
      {withFooter && <Footer />}
    </main>
  );
};

export default BasicLayout;
