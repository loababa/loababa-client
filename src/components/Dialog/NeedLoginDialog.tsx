import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog.tsx";
import { globalDialogStore } from "@/stores/globalDialogStore.ts";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";

const NeedLoginDialog = () => {
  const { isNeedLoginDialogOpen, setIsNeedLoginDialogOpen } =
    globalDialogStore();
  const navigate = useNavigate();
  return (
    <AlertDialog open={isNeedLoginDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그인이 필요해요!</AlertDialogTitle>
          <AlertDialogDescription>
            이용하시려는 콘텐츠는 회원 전용이예요.
            <br /> 로그인하러 가볼까요?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsNeedLoginDialogOpen(false)}>
            돌아가기
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              navigate(ROUTE_PATH.LOGIN);
              setIsNeedLoginDialogOpen(false);
            }}>
            로그인하러가기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NeedLoginDialog;
