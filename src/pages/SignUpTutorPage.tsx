import Stepper from "@/components/Stepper/Stepper.tsx";
import { TUTOR_SIGNUP_STEP_INFO } from "@/components/Stepper/TutorSignUpStep";

const SignUpTutorPage = () => {
  return <Stepper stepInfo={TUTOR_SIGNUP_STEP_INFO} />;
};

export default SignUpTutorPage;
