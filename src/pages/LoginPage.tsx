import { KakaoLogo, LoababaLogo, LoababaTitle } from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { clsx } from "clsx";
import { Link, useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();

  const lossamKey = location.search.split("=")[1];

  const loginRedirectUri = import.meta.env.PROD
    ? "https://loababa.com/lossam/signup"
    : "http://localhost:5173/lossam/signup";
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
          <Link
            to={`https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${loginRedirectUri}&response_type=code&state=${lossamKey ?? ""}`}
            rel="noreferrer">
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
          </Link>
          {/* TODO: 추후 구글 로그인 지원 시 가시화 */}
          {/*<Button*/}
          {/*  className={clsx(*/}
          {/*    "w-full h-[48px] bg-black rounded-[8px] border border-[#8E918F] flex justify-start",*/}
          {/*    "dark:hover:bg-black"*/}
          {/*  )}*/}
          {/*  variant="ghost">*/}
          {/*  <GoogleLogo*/}
          {/*    width={24}*/}
          {/*    height={24}*/}
          {/*  />*/}
          {/*  <span className="mx-auto">구글 로그인</span>*/}
          {/*</Button>*/}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
