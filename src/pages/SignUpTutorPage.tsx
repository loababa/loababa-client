import Stepper from "@/components/Stepper/Stepper.tsx";
import { tutorSignUpStepInfo } from "@/components/Stepper/TutorSignUpStep";

const SignUpTutorPage = () => {
  return <Stepper stepInfo={tutorSignUpStepInfo} />;
};

export default SignUpTutorPage;
