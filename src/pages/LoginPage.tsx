import {
  GoogleLogo,
  KakaoLogo,
  LoababaLogo,
  LoababaTitle
} from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { clsx } from "clsx";

const LoginPage = () => {
  return (
    <section className="px-[20px]">
      <div className="flex flex-col items-center justify-center gap-[4px] my-[180px]">
        <LoababaLogo
          width={50}
          height={50}
        />
        <LoababaTitle
          width={118}
          height={36}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[16px] font-semibold">간편 로그인</h1>
        <div className="flex flex-col gap-[8px] w-full mt-[20px]">
          <Button
            className={clsx(
              "w-full h-[48px] rounded-[8px] bg-[#FEE500] text-black flex justify-start",
              "dark:hover:bg-[#FEE500] dark:hover:text-black"
            )}
            variant="ghost">
            <KakaoLogo
              width={24}
              height={24}
            />
            <span className="mx-auto">카카오 로그인</span>
          </Button>
          <Button
            className={clsx(
              "w-full h-[48px] bg-black rounded-[8px] border border-[#8E918F] flex justify-start",
              "dark:hover:bg-black"
            )}
            variant="ghost">
            <GoogleLogo
              width={24}
              height={24}
            />
            <span className="mx-auto">구글 로그인</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
