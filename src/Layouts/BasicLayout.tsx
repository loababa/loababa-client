import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import NeedLoginDialog from "@/components/Dialog/NeedLoginDialog.tsx";

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
  const getComputedMainHeight = () => {
    if (withHeader && withFooter) {
      return "h-[calc(100%-152px)]";
    }
    if (withHeader) {
      return "h-[calc(100%-70px)]";
    }
    if (withFooter) {
      return "h-[calc(100%-82px)]";
    }
    return "h-full";
  };

  return (
    <div
      className={
        "h-dvh max-w-[390px] mx-auto flex flex-col bg-white dark:bg-black overflow-y-scroll"
      }>
      {withHeader && <Header {...withHeaderOptions} />}
      <main className={getComputedMainHeight()}>
        <Outlet />
      </main>
      {withFooter && <Footer />}
      {/* Global Dialogs */}
      <NeedLoginDialog />
    </div>
  );
};

export default BasicLayout;
