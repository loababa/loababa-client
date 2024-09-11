import Stepper from "@/components/Stepper/Stepper.tsx";
import { tutorSignUpStepInfo } from "@/components/Stepper/TutorSignUpStep";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signUpStore } from "@/stores/signUpStore.ts";
import ROUTE_PATH from "@/constants/routePath.ts";
import authStore from "@/stores/authStore.ts";
import { getOAuthLogin } from "@/apis/getOAuthLogin.ts";

const SignUpTutorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setKey } = signUpStore();
  const { setToken } = authStore();
  useEffect(() => {
    const authCode = new URLSearchParams(location.search).get("code");
    const key = new URLSearchParams(location.search).get("state");
    if (authCode) {
      console.log(authCode);
      getOAuthLogin("kakao", authCode).then((res) => {
        if (res?.data) {
          setToken(res.data.accessToken.value, res.data.refreshToken.value);
        }
      });
    }
    if (key) {
      setKey(key);
    }
    navigate(ROUTE_PATH.SIGNUP_TUTOR, { replace: true });
  }, []);
  return <Stepper stepInfo={tutorSignUpStepInfo} />;
};

export default SignUpTutorPage;
