import Stepper from "@/components/Stepper/Stepper.tsx";
import { consultingRequestStepInfo } from "@/components/Stepper/ConsultingRequestStep/ConsultingRequestStepInfo.tsx";

const ConsultingRequestPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Stepper stepInfo={consultingRequestStepInfo} />
    </div>
  );
};

export default ConsultingRequestPage;
