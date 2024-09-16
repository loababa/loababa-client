import { Button } from "@/components/ui/button.tsx";
import { CheckCircleGreen } from "@/components/icons";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";

export const SignUpSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-[20px] gap-[73px] h-full pb-[43px]">
      <section className="flex flex-col items-center gap-[24px] h-full justify-center">
        <CheckCircleGreen className="w-[36px] h-[36px]" />
        <h1 className="text-white text-[20px]">가입이 완료되었습니다!</h1>
      </section>
      <Button
        className="w-full h-[50px] rounded-[8px] dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white text-[16px]"
        onClick={() => navigate(ROUTE_PATH.HOME)}>
        완료
      </Button>
    </div>
  );
};
