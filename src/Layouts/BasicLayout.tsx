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
        "h-dvh max-w-[390px] mx-auto flex flex-col bg-white dark:bg-black overflow-y-scroll"
      }>
      {withHeader && <Header {...withHeaderOptions} />}
      <section className={"h-full"}>
        <Outlet />
      </section>
      {withFooter && <Footer />}
    </main>
  );
};

export default BasicLayout;
