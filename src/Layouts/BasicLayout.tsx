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
    <main
      className={
        "h-full w-[390px] mx-auto flex flex-col bg-white dark:bg-black"
      }>
      {withHeader && <Header {...withHeaderOptions} />}
      <div className="flex flex-col min-h-dvh">
        <Outlet />
      </div>
      {withFooter && <Footer />}
    </main>
  );
};

export default BasicLayout;
